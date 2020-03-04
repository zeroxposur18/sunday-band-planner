var Band = require('../models/band')

module.exports = {
    create
};

function create(req, res) {
    Band.findById(req.params.bandId, function(err, band) {
        let review = band.reviews.id(req.params.reviewId);
        console.log(review); 

        console.log('req.body',req.body);          
        review.comment.push(req.body);

            band.save(function(err){
                if (err) {
                    console.log(err, band);
                    res.redirect(`/bands/`);
                }
            else {res.redirect(`/bands/${band._id}`);}
        });
        });
    };
