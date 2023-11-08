const mongoose = require("mongoose");

const searchresultsSchema = mongoose.Schema({
    name: String,
    size: String,
    price: Number
    })
    module.exports = mongoose.model("searchresults",
    searchresultsSchema)