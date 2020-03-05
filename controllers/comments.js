var Band = require('../models/band')

module.exports = {
    create
};

function create(req, res) {
    Band.findById(req.params.bandId, function(err, band) {
        let review = band.reviews.id(req.params.reviewId);         
        review.comment.push(req.body);
            band.save(function(err){
                if (err) {
                    res.redirect(`/bands/`);
                }
            else {res.redirect(`/bands/${band._id}`);}
        });
        });
    };
