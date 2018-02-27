var mongoose = require('mongoose');
var Listing = mongoose.model('Listing');
var User = mongoose.model('User');

module.exports = {
    create: function(req, res) {
        User.findById({_id: req.session.user._id}, function(err, user){
            var newListing = new Listing({
                title: req.body.title,
                description: req.body.description,
                roomType: req.body.roomType,
                price: req.body.price,
                amountBeds: req.body.amountBeds,
                location: req.body.location,
                bookStatus: false,
                image: req.body.image
            });
            newListing._host = user._id;
            newListing.conversations = [];
            newListing.reservations = [];
            newListing.reviews = [];
            user.listings.push(newListing);
            user.save(function (err){
                if (err) {
                    res.json({ error: err });
                } else {
                    newListing.save(function(err, listings){
                        if (err){
                            res.json({ error: err });
                        } else {
                            res.json({listings: listings});
                        }
                    });
                }
            });
        });
    },

    findAllUser: function(req, res) {
        Listing.find({_host: req.session.user}, function(err, listings){
            if (err){
                res.json({error: err});
            } else {
                res.json({listings: listings});
            }
        });
    },

    findAll: function(req, res) {
        Listing.find({}, function(err, listings){
            if (err){
                res.json({ error: err });
            } else {
                res.json({listings: listings});
            }
        })
    },

    findOne: function(req, res){
        Listing.findById({_id: req.params.id})
        .populate('reviews')
        .exec(function (err, listing){
            if (err){
                res.json({ error: err });
            } else {
                console.log("success!", listing);
                res.json({ listing: listing });
            }
        });
    },

    // **WORK ON FILTER WHEN ERIC FINISHES SEARCH**

    update: function(req, res) {
        Listing.findById(req.params.id, function(err, listing){
            if (err) {
                res.json({ error: err });
            } else {
                listing.title = req.body.title;
                listing.description = req.body.description;
                listing.roomType = req.body.roomType;
                listing.price = req.body.price;
                listing.amountBeds = req.body.amountBeds;
                listing.location = req.body.location;
                listing.save(function(err, listing){
                    if (err) {
                        res.json({error: "Update attempt unsuccessful"});
                    } else {
                        res.json({listing: listing});
                    }
                })
            }
        });
    },

    search: function(req, res){
        Listing.find({location: {$regex : req.body.location}}, function(err, listings){
            if (err) {
                res.json({ error: err });
            } else {
                res.json({listings: listings});
            }
        })
    },

    findRecentLanding: function(req, res){
        // console.log("Hit recent landing controller")
        // console.log(req.body)
        Listing.find({}, function (err, listings){
            if (err) {
                res.json({ error: err });
            } else {
                res.json({listings: listings})
            }
        }).sort({createdAt: -1}).limit(4);
    },

    findRecentListing: function(req, res){
        Listing.find({}, function (err, listings){
            if (err) {
                res.json({ error: err });
            } else {
                res.json({listings: listings})
            }
        }).sort({createdAt: -1}).limit(3);
    },
}