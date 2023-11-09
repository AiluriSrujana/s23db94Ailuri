var express = require('express');
const searchresults_controllers= require('../controllers/searchresults');
var router = express.Router();
router.get('/', searchresults_controllers.searchresults_view_all_Page);
module.exports = router;
