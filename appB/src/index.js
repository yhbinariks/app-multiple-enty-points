import express from "express";
import router from "./router.js";
const app = express();
const port = 3002;

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
