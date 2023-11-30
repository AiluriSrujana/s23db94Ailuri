var express = require('express');
var passport = require('passport');
const searchresults_controllers= require('../controllers/searchresults');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
router.get('/', searchresults_controllers.searchresults_view_all_Page);
router.get('/create', searchresults_controllers.searchresults_create_Page);

router.get('/update',secured, searchresults_controllers.searchresults_update_Page);

router.get('/detail', secured,searchresults_controllers.searchresults_view_one_Page);  

router.get('/delete',secured, searchresults_controllers.searchresults_delete_Page);
module.exports = router;
