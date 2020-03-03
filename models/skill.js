var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
    skill: {type: Array}
}, {
    timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);