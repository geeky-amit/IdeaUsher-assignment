const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    tagName: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
