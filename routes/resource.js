var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var searchresults_controller = require('../controllers/searchresults');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/searchresults', searchresults_controller.searchresults_create_post);
// DELETE request to delete Costume.
router.delete('/searchresults/:id', searchresults_controller.searchresults_delete);
// PUT request to update Costume.
router.put('/searchresults/:id', searchresults_controller.searchresults_update_put);
// GET request for one Costume.
router.get('/searchresults/:id', searchresults_controller.searchresults_detail);
// GET request for list of all Costume items.
router.get('/searchresults', searchresults_controller.searchresults_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"costumes", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
