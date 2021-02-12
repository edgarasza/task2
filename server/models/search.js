const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    searchResult:{
        type:String,
        required:true
    }
})

const Search = mongoose.model('Search', searchSchema)

module.exports = Search