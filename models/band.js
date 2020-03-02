var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var bandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    joined: {
        type: Date,
        default: function() {
            return new Date();
        }
    },
    role: {
        type:String,
    },
}, {
    timestamps: true
}
);

module.exports = mongoose.model('band' ,bandSchema)