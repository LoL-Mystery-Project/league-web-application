const mongoose = require("mongoose");
const { Schema } = mongoose;

const mapSchema = new Schema(
  {
    any: {},
  },
  { strict: false }
);

const MapData = mongoose.model("MapData", mapSchema);

module.exports = MapData;
