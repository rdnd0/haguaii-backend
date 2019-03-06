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
      image: 'http://localhost:5000/images/brocoli.png'
    }]
  }, 
  {
    name: 'flamingo',
    tags: ['flamingo'],
    shirt_url: 'http://localhost:5000/images/shirt-flamingo.png',
    components: [{
      short_name: 'flamingo',
      image: 'http://localhost:5000/images/flamingo.png'
    }]
  },{
    name: 'pizza',
    tags: ['pizza'],
    shirt_url: 'http://localhost:5000/images/shirt-pizza.png',
    components: [{
      short_name: 'pizza',
      image: 'http://localhost:5000/images/pizza.png'
    }]
  },{
    name: 'robot',
    tags: ['robot'],
    shirt_url: 'http://localhost:5000/images/shirt-robot.png',
    components: [{
      short_name: 'robot',
      image: 'http://localhost:5000/images/robot.png'
    }]
  },
  {
    name: 'brocoli + pizza',
    tags: ['brocoli', 'pizza'],
    shirt_url: 'http://localhost:5000/images/shirt-brocolipizza.png',
    components: [{
      short_name: 'brocoli',
      image: 'http://localhost:5000/images/brocoli.png'
    },{
      short_name: 'pizza',
      image: 'http://localhost:5000/images/pizza.png'
    }]
  },
  {
    name: 'brocoli + flamingo',
    tags: ['brocoli', 'flamingo'],
    shirt_url: 'http://localhost:5000/images/shirt-brocoliflamingo.png',
    components: [{
      short_name: 'brocoli',
      image: 'http://localhost:5000/images/brocoli.png'
    },{
      short_name: 'flamingo',
      image: 'http://localhost:5000/images/flamingo.png'
    }]
  },
  {
    name: 'brocoli + robot',
    tags: ['brocoli', 'robot'],
    shirt_url: 'http://localhost:5000/images/shirt-brocolirobot.png',
    components: [{
      short_name: 'brocoli',
      image: 'http://localhost:5000/images/brocoli.png'
    },{
      short_name: 'robot',
      image: 'http://localhost:5000/images/robot.png'
    }]
  },
  {
    name: 'pizza + robot',
    tags: ['pizza', 'robot'],
    shirt_url: 'http://localhost:5000/images/shirt-pizzarobot.png',
    components: [{
      short_name: 'pizza',
      image: 'http://localhost:5000/images/pizza.png'
    },{
      short_name: 'robot',
      image: 'http://localhost:5000/images/robot.png'
    }]
  } ,
  {
    name: 'pizza + flamingo',
    tags: ['pizza', 'flamingo'],
    shirt_url: 'http://localhost:5000/images/shirt-flamingopizza.png',
    components: [{
      short_name: 'pizza',
      image: 'http://localhost:5000/images/pizza.png'
    },{
      short_name: 'flamingo',
      image: 'http://localhost:5000/images/flamingo.png'
    }]
  },
  {
    name: 'flamingo + robot',
    tags: ['flamingo', 'robot'],
    shirt_url: 'http://localhost:5000/images/shirt-flamingorobot.png',
    components: [{
      short_name: 'flamingo',
      image: 'http://localhost:5000/images/flamingo.png'
    },{
      short_name: 'robot',
      image: 'http://localhost:5000/images/robot.png'
    }]
  }

])
});

module.exports = router;