var mongoose = require('mongoose');
var Location = mongoose.model('Location');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res){
        console.log("Create location function", req.body);
        var location = new Location({
            city: req.body.city,
            state: req.body.usState,
            zipCode: req.body.zipCode
        });
        location.listings = [];
        location.save(function(err, location){
            if(err){
                res.json({ error: err });
            } else {
                console.log("New location", location);
                res.json({ location: location });
            }
        });
    },

    lastCreated: function(req, res){
        Location.find({}, function(err, location){
            if(err){
                res.json({ error: err });
            } else {
                res.json({ location: location })
            }
        }).sort({ createdAt: -1 }).limit(1);
    }
}