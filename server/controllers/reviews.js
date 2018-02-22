var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res) {
        Listing.findOne({_id: req.params.id}, function (err, listing) {
            var newReview = new Review({
                title: req.body.title,
                content: req.body.content,
                dateLeft: Date.now(),
                _guest: req.session.user._id
            });
            newReview._listing = listing._id;
            listing.reviews.push(newReview);
            listing.save(function(err) {
                if (err) {
                } else {
                    newReview.save(function(err, review) {
                        if (err) {
                        } else {
                            res.json({review: review});
                        }
                    })
                }
            });
        });
    },

    show: function(req, res){
        Review.find({_listing: req.params.id})
        .populate('_guest')
        .exec(function(err, reviews){
            if (err) {
                res.json({error: err });
            } else {
                res.json({reviews: reviews})
            }
        })
    }
}