var Band = require('../models/band');

module.exports = {
    index,
    new: newBand,
    create,
    member,
    show,
    delete: deleteOne
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
    Band.findById(req.params.id, function(err, bands){
    res.render('bands/show', {name: 'Name Detail', bands, user: req.user})
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

    }