import { Groq } from "groq-sdk";
import { buildSystemPrompt } from "./prompt.js";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// Keywords for professional relevance
const professionalKeywords = [
  "project", "skill", "experience", "education", "work", "job", "career", "technical", "programming",
  "development", "software", "code", "coding", "tech", "technology", "leetcode", "github", "linkedin",
  "qualification", "certification", "degree", "college", "university", "internship", "portfolio",
  "resume", "cv", "background", "expertise", "proficiency", "javascript", "typescript", "react",
  "node", "database", "api", "backend", "frontend", "fullstack", "web development", "computer",
  "engineering", "swayam", "gosavi", "pict", "maharashtra", "pune", "contact", "email", "phone"
];

const wittyResponses = [
  "🤖 404: Professional context not found! I'm here to discuss Swayam's career, not life's mysteries.",
  "⚡ Error 404: That's beyond my professional scope! Try asking about projects, skills, or experience.",
  "🚀 Oops! I'm a career-focused AI, not a philosopher. Let's talk about Swayam's professional journey!",
  "💼 404: Professional mode only! Ask me about coding skills, projects, or work experience instead.",
  "🎯 That's outside my expertise! I'm here to discuss Swayam's technical background and achievements.",
  "⭐ 404: Career-related queries only! Try asking about education, projects, or programming skills.",
  "🔧 Error: Non-professional topic detected! Let's focus on Swayam's development journey.",
  "📚 404: Study mode engaged! Ask me about technical skills, certifications, or project experience."
];

function isProfessionalQuery(message) {
  const lower = message.toLowerCase();
  return professionalKeywords.some(k => lower.includes(k));
}

function getWittyResponse() {
  return wittyResponses[Math.floor(Math.random() * wittyResponses.length)];
}

export async function handleUserPrompt(userMessage) {
  if (!isProfessionalQuery(userMessage)) {
    return getWittyResponse();
  }

  try {
    const systemPrompt = buildSystemPrompt();

    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0]?.message?.content || "Hmm, I couldn't quite understand. Can you rephrase?";
  } catch (err) {
    console.error("Groq API error:", err);
    return "⚠️ Something went wrong while fetching AI response. Please try again later.";
  }
}
