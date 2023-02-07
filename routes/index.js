var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentLikesCount = fs.readFileSync('likesCount.txt').toString()
  let isAppRunningOnRender = false
  if (process.env.RUNNING_ON_RENDER) {
    isAppRunningOnRender = true
  }

  res.render('index', { likesCount: currentLikesCount, isAppRunningOnRender });
});

module.exports = router;
