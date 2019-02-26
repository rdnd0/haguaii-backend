const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shirtSchema = new Schema ({
  image: String,
  price: Number,
  composition: String,
  size: {
    type: String,
    enum : ['S','M','L','XL','XXL'],
    default: 'M'
  },
  user: [{
    type: ObjectId,
    ref: 'User',
  }],


})

const Shirt = mongoose.model('Shirt', shirtSchema);

module.exports = Shirt;