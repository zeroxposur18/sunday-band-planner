var Skill = require('../models/skill');
var Band = require('../models/band');

module.exports = {
    new: newSkill,
    create,
    addToBand
};

function addToBand(req, res) {
    Band.findById(req.params.id, function(err, band) {
        band.musicskills.push(req.body.skillId);
        band.save(function(err) {
            res.redirect(`/bands/${band._id}`);
        });
    });
};
function create(req,res) {
    Skill.create(req.body, function(err,performer) {
        res.redirect('/skills/new');
    });
};
function newSkill(req, res) {
    Skill.find({}, function(err, skill) {
        res.render('skills/new', {
            skills
        });
    })
};