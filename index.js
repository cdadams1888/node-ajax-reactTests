'use strict';
const express = require('express');
const router  = express.Router();

router.get('/', function(req, res) {
    res.render('index', { data: "Hey"});

});



let passSomeData = function(req, res, next) {
    console.log('hi');
    //console.log(req);
    //console.log(`Response: ${res}`);
    next()
};

router.use(passSomeData);

module.exports = router;


