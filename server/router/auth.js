var express = require('express');
var router = express.Router();

const {isAuth} = require('../controller/auth');

router.post('/', isAuth);

module.exports = router;