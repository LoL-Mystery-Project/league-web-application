const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Monster = require("./models/monster");
const MapData = require("./models/mapData");
const path = require('path');

//const userRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//Simple Route
// app.get("/hello", function (req, res) {
//   return res.send("Hello world");
// });

// app.use("/users", userRouter);

app.get("/monsters", async (req, res) => {
  try {
    const payload = await Monster.find();
    res.status(200).send(payload);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/mapData", async (req, res) => {
  try {
    const payload = await MapData.find();
    res.status(200).send(payload);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/add", async (req, res) => {
  try {
    const elderDrag = new MapData(elder);
    await elderDrag.save();
    res.status(200).send("ok");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

function startKeepAlive() {
  setInterval(function () {
    var options = {
      host: "one-hp.herokuapp.com",
      port: 80,
      path: "/",
    };
    http
      .get(options, function (res) {
        res.on("data", function (chunk) {
          try {
            // optional logging... disable after it's working
            console.log("HEROKU RESPONSE: " + chunk);
          } catch (err) {
            console.log(err.message);
          }
        });
      })
      .on("error", function (err) {
        console.log("Error: " + err.message);
      });
  }, 20 * 60 * 1000); // load every 20 minutes
}

startKeepAlive();
