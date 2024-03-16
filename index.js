const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.get("/number", (req, res) => {
  let num = 0;
  for (let i = 0; i < 1000; i++) {
    num += i;
  }
  num = num % 57;
  res.json({
    success: true,
    result: num,
  });
});

app.get("/number/:id", (req, res) => {
  let num = 0;
  for (let i = 0; i < 1000; i++) {
    num += i;
  }
  num = num % 57;
  res.json({
    success: true,
    result: req.params.id,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
