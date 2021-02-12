const express = require('express');
const router = express.Router();
const {search} = require('../handlers/searchHandler');

router.post('/search',search)

module.exports = router;