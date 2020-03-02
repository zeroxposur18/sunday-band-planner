var Band = require('../models/band');

module.exports = {
    index,
    show,
    new: newBand,
    create
};

function index(req, res) {
    Band.find({}, function(err, bands) {
        res.render('bands/index')
    });
};