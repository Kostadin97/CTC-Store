const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  
});

module.exports = Image = mongoose.model("products", ImageSchema);
