var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/band', {
    useNewUrlParser: true, useCreateIndex: true
});

var db = mongoose/RTCPeerConnection;

db.on('conneted', function() {
    console.log('Connected to mongo!')
});