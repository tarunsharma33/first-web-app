var express = require('express');
var controller = require('./user.controller');
var router = express.Router();
router.get('/', controller.signup)
module.exports = router;