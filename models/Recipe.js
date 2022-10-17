const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  timeRange: {
    type: String,
    // required: true,
  },
  serves: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  directions: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
