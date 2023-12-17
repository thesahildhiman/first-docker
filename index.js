const express = require("express");

const app = express();
const PORT = 8000;
app.use(express.json());

app.use("/", (req, res) => {
  return res.json("running message from nodejs");
});

app.listen(PORT, () => {
  console.log(`listen at ${PORT}`);
});
