const express = require('express');
const router = express.Router();
var Testcontoller = require('../controller/testcontroller');


router.route('/test')
    .get(Testcontoller.list_all_tests)
    .post(Testcontoller.create_a_test)


module.exports = router;


