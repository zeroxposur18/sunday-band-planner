var Band = require('../models/band');
var Skill = require('../models/skill');
module.exports = {
    index,
    new: newBand,
    create,
    member,
    show,
    delete: deleteOne,
    showUpdate,
    update
};

function index(req, res) {
    Band.find({}, function(err, bands) {
        res.render('bands/index', {bands, user: req.user})
    });
};
function member(req, res) {
    Band.find({}, function(err, bands) {
        res.render('bands/member', {name: 'All Names', bands, user:req.user});
    });
};
function newBand(req, res) {
    res.render('bands/new', {user: req.user})
};
function show(req, res) {
    Band.findById(req.params.id, function(err, band){
    Skill.find({_id: {$nin: band.musicskill}})
    .exec(function(err, skills) {
        res.render('bands/show', {
            band, skills, user: req.user
        });
    });
})};

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    var band = new Band(req.body);
    band.save(function(err) {
      if (err) return res.redirect('/bands/new');
      res.redirect('/bands/member');
    })};

    function deleteOne(req, res) {
        Band.findByIdAndDelete(req.params.id, function(err, band){
            res.redirect('/bands/member');
        });
    }
    function showUpdate(req, res) {
        Band.findById(req.params.id, function(err, band) {
            console.log(band);
            res.render('bands/edit', {band, user: req.user})
        })
    };
    function update(req, res) {
        console.log(req.body);
        Band.findByIdAndUpdate(req.params.id, {
            name:req.body.name,
            role:req.body.role,
            musicskill: req.body.skill
        },
        {new:true},
        function(err, response) {
            if (err) {
                console.log(err);
            }
             else res.redirect('/bands/member')
        }
        )};