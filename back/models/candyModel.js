const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let CandiesSchema = new Schema({
  id: Number,
  ordered: String,
  name: String,
  price: Number,
  img: String,
  btnTitle: String
}, { collection : 'candies' });

let Candy = module.exports = mongoose.model('Candy', CandiesSchema);