import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("yeah");
});

app.listen(port, () => {
  console.log(`example app listening to port ${port}`);
});
