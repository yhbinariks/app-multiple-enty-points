import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.get("/app-a/name", (req, res) => {
  res.send("My name is 'App A'");
});

router.get("/app-a/age-by-name/:name", async (req, res) => {
  const { name } = req.params;

  const result = await fetch(`https://api.agify.io?name=${name}`);
  const data = await result.json();
  res.send(JSON.stringify(data));
});

export default router;
