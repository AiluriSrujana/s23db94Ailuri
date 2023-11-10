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
exports.searchresults_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await searchresults.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.searchresults_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await Searchresults.findById( req.params.id)
        // Do updates of properties
        if(req.body.searchresults_type)
        toUpdate.searchresults_type = req.body.searchresults_type;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
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

    // for a specific Searchresults.
