var searchresults = require('../models/searchresults');
// List of all searchresults.
exports.searchresults_list = async function(req, res) {
    try{
    searchresults = await searchresults.find();
    res.send(searchresults);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// for a searchresults .
exports.searchresults_detail = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults detail: ' + req.params.id);
};
// Handle searchresults create on POST.
// Handle Costume create on POST.
exports.searchresults_create_post = async function(req, res) {
    console.log(req.body)
    let document = new searchresults();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.size = req.body.size;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle searchresults delete form on DELETE.
exports.searchresults_delete = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults delete DELETE ' + req.params.id);
};
// Handle searchresults update form on PUT.
exports.searchresults_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: searchresults update PUT' + req.params.id);
};
exports.searchresults_view_all_Page = async function(req, res) {
    try{
    searchresults = await searchresults.find();
    res.render('searchresults', { title: ' Search Results', results: searchresults});
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
