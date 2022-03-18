//importation mongoose
const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  adresse: {
    type: "string",
    required: true,
  },
  tel: Number,
});
module.exports = User = mongoose.model("/user", userSchema);
