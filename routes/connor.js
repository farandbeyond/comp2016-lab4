var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    res.render('connor',
        { title: 'Connor Hadley',
          info: 'A college level programmer, who enjoys creating java projects in his spare time.'});
});

module.exports = router;
