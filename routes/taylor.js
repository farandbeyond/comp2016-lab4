/**
 * Created by Connor on 2016-10-02.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('angela',
        { title: 'Taylor Hadley', info: 'The sister of connor, currently studying nursing at york. she is always busy with school work of some sort.'});
});

module.exports = router;/**
 * Created by Connor on 2016-10-02.
 */
