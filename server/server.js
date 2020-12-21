const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Monster = require("./models/monster");

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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
