'use strict';
const express = require('express');
const router  = express.Router();

router.post('/', function(req, res) {
    console.log('req received');
    res.status(200).end();
    let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    };
    console.log(data.firstName);
    console.log(data.lastName);
});

module.exports = router;



