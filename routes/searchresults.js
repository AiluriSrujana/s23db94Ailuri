var express = require('express');
const searchresults_controllers= require('../controllers/searchresults');
var router = express.Router();
router.get('/', searchresults_controllers.searchresults_view_all_Page);
router.get('/detail', searchresults_controllers.searchresults_view_one_Page);    
/* GET create costume page */
router.get('/create', searchresults_controllers.searchresults_create_Page);
/* GET create update page */
router.get('/update', searchresults_controllers.searchresults_update_Page);
/* GET delete costume page */
router.get('/delete', searchresults_controllers.searchresults_delete_Page);
module.exports = router;
