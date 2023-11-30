const { Double } = require("mongodb");
const mongoose = require("mongoose");

const searchresultsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true,
        
    },
    price: {
        type: Number,
        required: true,
        min :0,
        max :100000
    }
});

module.exports = mongoose.model("searchresults", searchresultsSchema);
