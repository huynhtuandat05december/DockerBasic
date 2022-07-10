const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.json(process.env.MESSAGE ? `${process.env.MESSAGE}` : "NO MESSAGE");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
