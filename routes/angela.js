/**
 * Created by Connor on 2016-10-02.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('angela',
        { title: 'Angela Hadley',
            info: 'The mother of the family, and a former legal assistant. she functions as a single mother for her 2 children and dog.'});
});

module.exports = router;
