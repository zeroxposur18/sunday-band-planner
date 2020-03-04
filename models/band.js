var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema ({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }},   {
        timestamps: true
    }
);

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
    },
    googleId: String,
    email: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
}
);

module.exports = mongoose.model('band' ,bandSchema)