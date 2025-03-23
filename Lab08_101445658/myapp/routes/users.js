const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Middleware 
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// GET
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

// POST
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('POST received!');
});

module.exports = router;
