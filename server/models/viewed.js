const mongoose = require('mongoose');

const viewedSchema = new mongoose.Schema({
    publishedAt:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
       type:String,
    },
    thumbnail:{
        type:String,
    }
})

const Viewed = mongoose.model('Viewed', viewedSchema)

module.exports = Viewed