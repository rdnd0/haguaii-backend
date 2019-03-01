const express = require('express');

const router = express.Router();
require("dotenv").config();

const Shirt = require('../models/shirt');

router.post('/', (req, res, next) => {
  const { user, image, size } = req.body;
  const price = 70;
  const composition = '100% silky cotton'
 
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
  //I wonder from where can I get the current user id.. can I use this const currentUser = req.session.currentUser.username; might need change in app.js
  Shirt.find({user: currentUser})
    .then((user) => {
      res.status(200).json({user})
  });
});

module.exports = router;