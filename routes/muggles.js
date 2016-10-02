/**
 * Created by Connor on 2016-10-02.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('angela',
        { title: 'Muggles Apricot Cooke Hadley',
            info: 'The pet of the family. He enjoys long walks, petting sessions, and any human food he comes across.'});
});

module.exports = router;