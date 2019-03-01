const express = require('express');
const router = express.Router();
require("dotenv").config();

router.get('/', (req, res, next) => {
  res.status(200).json([{
    name: 'brocoli',
    tags: ['broco'],
    shirt_url: 'http://localhost:5000/images/shirt-brocoli.png',
    components: [{
      short_name: 'brocoli',
      image: 'http://localhost:5000/images/broc.png'
    }]
  }, 
  {
    name: 'flamingo',
    tags: ['flamingo'],
    shirt_url: 'http://localhost:5000/images/shirt-flamingo.png',
    components: [{
      short_name: 'flamingo',
      image: 'http://localhost:5000/images/fla.png'
    }]
  },{
    name: 'pizza',
    tags: ['pizza'],
    shirt_url: 'http://localhost:5000/images/shirt-pizza.png',
    components: [{
      short_name: 'pizza',
      image: 'http://localhost:5000/images/pizz.png'
    }]
  },{
    name: 'robot',
    tags: ['robot'],
    shirt_url: 'http://localhost:5000/images/shirt-robot.png',
    components: [{
      short_name: 'robot',
      image: 'http://localhost:5000/images/rob.png'
    }]
  },
  {
    name: 'brocoli + mando',
    tags: ['broco', 'mando'],
    shirt_url: 'http://localhost:5000/images/shirt-brocolimando.png',
    components: [{
      short_name: 'brocoli',
      image: 'http://localhost:5000/images/broc.png'
    },{
      short_name: 'mando',
      image: 'http://localhost:5000/images/mando.png'
    }]
  }])
  .catch(next)
});

module.exports = router;