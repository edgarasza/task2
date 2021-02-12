const express = require('express');
const router = express.Router();
const {viewed} =  require('../handlers/viewedHandler')

router.post('/viewed',viewed)

module.exports = router;