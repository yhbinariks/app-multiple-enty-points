import express from "express";
import routerA from "appa";
import routerB from "appb";

const app = express();
const port = 3000;

app.use("/", routerA);
app.use("/", routerB);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
