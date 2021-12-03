const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = Schema({
  destination: {
    type: Schema.Types.ObjectId,
    ref: "destination",
  },
  title: String,
  location: String,
  fileUrl: [String],
  mediaType: {
    type: String,
    enum: ["image", "video"],
  },
  tags: [String],
  type: {
    type: String,
    enum: ["preview", "overview", "events"],
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

module.exports = mongoose.model("destination_gallery", schema);
