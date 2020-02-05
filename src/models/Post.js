const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);