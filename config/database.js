var mongoose = require('mongoose');

console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

