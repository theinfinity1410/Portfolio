// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
