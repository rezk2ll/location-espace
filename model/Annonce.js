const mongoose = require("mongoose");

const { Schema } = mongoose;

const annonceSchema = new Schema({
  annoncementOwner: {
    type: "string",
    required: true,
  },
  annoncementDescription: {
    type: "string",
    required: true,
  },
  annoncementPicture: {
    type: "string",
    required: true,
  },
  annoncementExpo: {
    type: "date",
  },
});
module.exports = Annonce = mongoose.model("/annonce", annonceSchema);
