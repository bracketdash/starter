const api = require("./api");
const cors = require("cors");
const express = require("express");
const path = require("path");

const PRODUCION_PORT = 3000;
const DEVELOPMENT_PORT = 3001;

const app = express();
const port = process.argv[2] === "dev" ? DEVELOPMENT_PORT : PRODUCION_PORT;

app.use(cors());
app.use("/api", api);

app.get("/test", (req, res) => {
  res.send({ ok: true });
});

if (port === PRODUCION_PORT) {
  app.use(express.static(path.resolve(__dirname, "../client/dist")));
  app.all("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
