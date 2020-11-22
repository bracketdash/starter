const api = require("./api");
const express = require("express");
const path = require("path");

/*
TODO
- Make a version of the server that only runs the API without serving ./client/dist
- Make `yarn dev` also start the API server on a different port
- Add logic to the front end to point api calls to the API dev server port if running in dev mode
*/

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
