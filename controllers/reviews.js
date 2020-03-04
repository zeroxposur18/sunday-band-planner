var Band = require('../models/band');

module.exports = {
    create
};

function create(req, res) {
    Band.findById(req.params.id, function(err, band) {
        band.reviews.push(req.body);
        band.save(function(err){
            res.redirect(`/bands/${band._id}`);
        });
    });
}