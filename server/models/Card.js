const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  // Define the attributes of the card you want to store
  name: {
    type: String,
    required: true,
  },
  // ... (other attributes)
});

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
