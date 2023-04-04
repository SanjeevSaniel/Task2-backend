const mongoose = require("mongoose");

const APIResponse = mongoose.model(
  "APIResponse",
  mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: String,
    location: String,
  })
);

module.exports.APIResponse = APIResponse;
