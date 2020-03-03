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
        default: 'Singer',
        enum:['Singer', 'Guitarist', 'Violinist', 'Pianist', 'Bassist', 'Drummer']
    },
    playing: {
        type: Boolean,
        default: false
    },
    musicskill: {
        type: Array,
        required: true,
        default: []
    }
}, {
    timestamps: true
}
);

module.exports = mongoose.model('band' ,bandSchema)