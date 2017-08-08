const express = require('express');
const router = express.Router();
const request = require('request');
const fs = require('fs');


/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;