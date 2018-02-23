var mongoose = require('mongoose');
var Location = mongoose.model('Location');
var Listing = mongoose.model('Listing');

module.exports = {
    create: function(req, res){
        var location = new Location({
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode
        });
        location.listings = [];
        newLocation.save(function(err, location){
            if(err){
                res.json({ error: err });
            } else {
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