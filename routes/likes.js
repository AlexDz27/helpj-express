var express = require('express');
var router = express.Router();
const fs = require('fs')

router.post('/update', function(req, res, next) {
  const updatedLikesCount = req.body.toString()

  // Write to database
  fs.writeFileSync('likesCount.txt', updatedLikesCount)

  res.send('Updated likes count: ' + updatedLikesCount);
});

module.exports = router;
