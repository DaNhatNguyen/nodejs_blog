// Lưu các trang không nằm trong tài nguyên cụ thể(home, search, contact,..)

var express = require('express');
var router = express.Router();

const sitesController = require('../app/controllers/SitesController')

router.use('/search', sitesController.search);
router.use('/', sitesController.index);

module.exports = router;