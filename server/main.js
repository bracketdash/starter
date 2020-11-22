const express = require("express");
const path = require("path");

const api = require("./api");

const app = express();

app.use("/api", api);

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.all("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
