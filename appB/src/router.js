import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/app-b/name", (req, res) => {
  res.send("My name is 'App B'");
});

router.get("/app-b/random-word", async (req, res) => {
  const result = await fetch("https://random-words-api.vercel.app/word");
  const data = await result.json();
  res.send(JSON.stringify(data));
});

export default router;
