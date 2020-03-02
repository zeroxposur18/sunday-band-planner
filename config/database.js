var mongoose = require('mongoose');

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


// mongoose.connect('mongodb://localhost/movies',
// { useNewUrlParser: true, useCreateIndex: true }
// );

// shortcut to mongoose.connection object
// var db = mongoose.connection;

// db.on('connected', function () {
//   console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });