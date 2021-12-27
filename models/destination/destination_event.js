const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = Schema({
  destination: {
    type: Schema.Types.ObjectId,
    ref: "destination",
  },
  title: String,
  subTitle: String,
  desC: String,
  imageFileUrl: [String],
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  },
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

module.exports = mongoose.model("destination_event", schema);
