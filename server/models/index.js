const mongoose = require('mongoose')
mongoose.set('debug',true)
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/task',{
    keepAlive:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports.Search = require('./search')
module.exports.Viewed = require('./viewed')