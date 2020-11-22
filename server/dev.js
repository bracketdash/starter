const api = require("./api");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use("/api", api);

app.get("/test", (req, res) => {
  res.send({ ok: true });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Dev Server running at http://localhost:${port}`);
});
