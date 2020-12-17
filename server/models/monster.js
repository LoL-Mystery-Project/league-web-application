const mongoose = require("mongoose");
const { Schema } = mongoose;

const monsterSchema = new Schema(
  {
    any: {},
  },
  { strict: false }
);

const Monster = mongoose.model("Monster", monsterSchema);

module.exports = Monster;
