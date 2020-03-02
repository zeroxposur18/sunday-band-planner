var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var abilitySchema = new Schema({
    ability: []
}, {
    timestamps: true
});

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
    ability: [abilitySchema],
    googleId: String,
}, {
    timestamps: true
}
);

module.exports = mongoose.model('band' ,bandSchema)