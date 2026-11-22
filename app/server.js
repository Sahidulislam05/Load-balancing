import express from "express";
import os from "os";

const app = express();
const PORT = 5000;

const INSTANCE = process.env.INSTANCE_NAME || os.hostname();

app.get("/", (req, res) => {
  res.send(`Hello World from ${INSTANCE}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} - ${INSTANCE}`);
});
