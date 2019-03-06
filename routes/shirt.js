const express = require('express');

const router = express.Router();
require("dotenv").config();

const Shirt = require('../models/shirt');

router.post('/', (req, res, next) => {
  const { user, size } = req.body;
  const image = req.body.shirtURL;
  const price = 70;
  const composition = '100% silky cotton';
  const newShirt = new Shirt({
    image,
    price,
    composition,
    size,
    user
  });
  
  newShirt.save()
  .then((shirt)=> {
    res.status(200)
    res.json({shirt: newShirt})
  })
  .catch(next)

});

router.get('/', (req, res, next) => {
  Shirt.find({user: currentUser})
    .then((user) => {
      res.status(200).json({user})
  });
});

module.exports = router;