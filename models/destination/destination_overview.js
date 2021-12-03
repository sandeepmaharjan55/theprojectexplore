const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = Schema({
  destination: {
    type: Schema.Types.ObjectId,
    ref: "destination",
  },
  temperature: Number,
  tempUnit: String,
  cons: [String],
  pros: [String],
  languages: [String],
  religions: [String],
  landscapes: [String],
  tags: [String],
  internet: String,
  fun: String,
  airQuality: Number,
  humidity: Number,
  lackOfCrime: String,
  flag: {
    type: Boolean,
    default: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: Date,
});

module.exports = mongoose.model("destination_overview", schema);
