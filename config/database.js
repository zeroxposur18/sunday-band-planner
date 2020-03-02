var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bands', {
    useNewUrlParser: true, useCreateIndex: true
});

var db = mongoose.connection;

db.on('connected', function() {
    console.log('Connected to mongo!')
});