const mongoose = require("mongoose")

const User = new mongoose.Schema({
  name: { type: String, default: 'SomeName' },
  phone: { type: Number, index: true },
  email: { type: String },
  portfolio: { type: String}
})

module.exports = mongoose.model("User", User);