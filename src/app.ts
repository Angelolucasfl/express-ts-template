import express from "express";
import MessageResponse from "./interfaces/MessageResponse";

const app = express();

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({ message: "ok" });
});

export default app;
