const mongoose = require("mongoose");

const EmploySchema = mongoose.Schema({
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

let Employ = mongoose.model("EmploySchema",EmploySchema)
module.exports = Employ