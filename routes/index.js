var express = require('express');
var router = express.Router();

const uuid = require('uuid/v5')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: uuid.URL });
});

module.exports = router;
