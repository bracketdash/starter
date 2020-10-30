const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, "../dist")));
app.all("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
