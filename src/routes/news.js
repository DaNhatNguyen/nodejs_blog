// Trang nhỏ lưu tin tức

var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController')

router.use('/:slug', newsController.show); // Trang nhỏ trong trang news
router.use('/', newsController.index);

module.exports = router;