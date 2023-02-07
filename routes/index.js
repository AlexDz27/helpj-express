var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentLikesCount = fs.readFileSync('likesCount.txt').toString()

  res.render('index', { likesCount: currentLikesCount });
});

module.exports = router;
