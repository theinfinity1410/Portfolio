import express from "express";
import { handleUserPrompt } from "./controller.js";

const router = express.Router();

router.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ message: "Message is required." });
  }

  try {
    const response = await handleUserPrompt(message);
    res.json({ response });
  } catch (err) {
    console.error("Route error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default router;
