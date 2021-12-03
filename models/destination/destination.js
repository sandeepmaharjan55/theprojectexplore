const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = Schema({
  name: String,
  subName: String,
  desC: String,
  isRecommended: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    enum: ["city", "trekking"],
  },
  difficulty: String,
  minDays: Number,
  bestSeasons: String,
  accomodation: String,
  maxAltitude: String,
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

// Create an index on `createdDate`
// schema.index({ createdDate: 1 });

module.exports = mongoose.model("destination", schema);
