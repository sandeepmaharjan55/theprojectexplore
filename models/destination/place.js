const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = Schema({
  images: [String],
  videos: [String],
  // caption: String,
  description: {
    type: String,
    default: "",
  },
  mediaType: {
    type: String,
    enum: ["image", "video"],
    required: true,
  },
  flag: {
    type: Boolean,
    default: true,
  },
  activeStatus: {
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
schema.index({ createdDate: 1 });

module.exports = mongoose.model("place", schema);
