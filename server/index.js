const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./controller')
app.get("/api/compliment", ctrl.getAllCompliments)

app.get("/api/zen", ctrl.getZen)

app.get("/api/colorone", ctrl.getColorOne)
app.get("/api/colortwo", ctrl.getColorTwo)

app.listen(4000, () => console.log("Server running on 4000"));
