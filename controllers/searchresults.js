var searchresults = require('../models/searchresults');
// List of all searchresults.
exports.searchresults_list = function(req, res) {
res.send('NOT IMPLEMENTED: searchreuslts list');
};
// for a searchresults .
exports.searchresults_detail = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults detail: ' + req.params.id);
};
// Handle searchresults create on POST.
exports.searchresults_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults create POST');
};
// Handle searchresults delete form on DELETE.
exports.searchresults_delete = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults delete DELETE ' + req.params.id);
};
// Handle searchresults update form on PUT.
exports.searchresults_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults update PUT' + req.params.id);
};
