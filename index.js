const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá mundo")
});

app.listen(3000, () => {
    console.log("Srvidor on: http://localhost:3000");
});