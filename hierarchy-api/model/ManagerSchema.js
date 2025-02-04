const mongoose = require("mongoose");

const ManagerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let Manager = mongoose.model("ManagerSchema",ManagerSchema)
module.exports = Manager