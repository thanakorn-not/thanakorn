const express = require("express");
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// match GET localhost:4000/
app.get("/", (req, res)=>{
  res.send("Sawasdee");
});

const cameraRoute = require("./routes/camera.route");
app.use("/cameras", cameraRoute);

// const eventRoute = require("./routes/event.route");
// app.use("/events", eventRoute);


app.listen(port, () => {
  console.log("App started at port: " + port);
});
