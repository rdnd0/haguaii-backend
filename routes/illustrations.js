const express = require('express');

const router = express.Router();
require("dotenv").config();

router.get('/', (req, res, next) => {
  res.status(200).json({
    name: 'brocoli',
    shirt_url: 'http://localhost:5000/images/shirt-brocoli.png',
    components: {
      short_name: 'broco',
      image: 'http://localhost:5000/images/broc.png'
    }
  })
});

module.exports = router;