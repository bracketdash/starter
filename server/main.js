const api = require("./api");
const cors = require("cors");
const express = require("express");
const path = require("path");

const app = express();

app.use(cors());
app.use("/api", api);

app.get("/test", (req, res) => {
  res.send({ ok: true });
});

if (process.argv.length < 3 || process.argv[2] !== "dev") {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
  app.all("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });
}

let port = 3000;
if (process.argv[2] === "dev") {
  port = 3001;
}
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
