const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
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
  description: {
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
  petName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required :true
  },
  state: {
    type: String,
    required :true
  },
  createdBy:{
    type: String,
    ref: "User"
  },
});

module.exports = mongoose.model("Post", PostSchema);
