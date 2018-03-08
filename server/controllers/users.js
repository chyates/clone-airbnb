const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {
    strZip: function(req, res){
        User.find({ _id: req.params.id }, function(err, user) {
            if(err){
                res.json({ error: err });
            } else {
                var numZip = parseInt(user.zipCode);
                var fullName = "";
                if (numZip >= 35004 && numZip <= 36925) {
                    fullName = "Alabama";
                }
                else if (numZip >= 99501 && numZip <= 99950) {
                    fullName = "Alaska";
                }
                else if ((numZip >= 71601 && numZip <= 75929) || numZip == 75502) {
                    fullName = "Arkansas";
                }
                else if (numZip >= 85001 && numZip <= 86556) {
                    fullName = "Arizona";
                }
                else if (numZip == 96799){
                    fullName = "American Samoa";
                }
                else if (numZip >= 90001 && numZip <= 96162) {
                    fullName = "California";
                }
                else if (numZip >= 80001 && numZip <= 81658) {
                    fullName = "Colorado";
                }
                else if (numZip >= 6001 && numZip <= 6389) {
                    fullName = "Connecticut";
                }
                else if (numZip >= 20001 && numZip <= 20799) {
                    fullName = "Washington, D.C.";
                }
                else if (numZip >= 19701 && numZip <= 19980) {
                    fullName = "Delaware";
                }
                else if (numZip >= 96941 && numZip <= 96944){
                    fullName = "Federated States of Micronesia";
                }
                else if (numZip >= 32004 && numZip <= 34997) {
                    fullName = "Florida";
                }
                else if ((numZip >= 30001 && numZip <= 31999) || numZip == 39901) {
                    fullName = "Georgia";
                }
                else if (numZip >= 96910 && numZip <= 96932){
                    fullName = "Guam";
                }
                else if (numZip >= 96701 && numZip <= 96898) {
                    fullName = "Hawaii";
                }
                else if ((numZip >= 50001 && numZip <= 52809) || (numZip >= 68119 && numZip <= 68120)) {
                    fullName = "Iowa";
                }
                else if (numZip >= 83201 && numZip <= 83876) {
                    fullName = "Idaho";
                }
                else if (numZip >= 60001 && numZip <= 62999) {
                    fullName = "Illinois";
                }
                else if (numZip >= 46001 && numZip <= 47997) {
                    fullName = "Indiana";
                }
                else if (numZip >= 66002 && numZip <= 67954) {
                    fullName = "Kansas";
                }
                else if (numZip >= 40003 && numZip <= 42788) {
                    fullName = "Kentucky";
                }
                else if ((numZip >= 70001 && numZip <= 71232) || (numZip >= 71234 && numZip <= 71497)) {
                    fullName = "Louisiana";
                }
                else if ((numZip >= 1001 && numZip <= 2791) || (numZip >= 5501 && numZip <= 5544)) {
                    fullName = "Massachusetts";
                }
                else if (numZip == 20331 || (numZip >= 20335 && numZip <= 20797) || (numZip >= 20812 && numZip <= 21930)) {
                    fullName = "Maryland";
                }
                else if (numZip >= 3901 && numZip <= 4992) {
                    fullName = "Maine";
                }
                else if (numZip == 96960 || numZip == 96970) {
                    fullName = "Marshall Islands";
                }
                else if (numZip >= 48001 && numZip <= 49971) {
                    fullName = "Michigan";
                }
                else if (numZip >= 55001 && numZip <= 56763) {
                    fullName = "Minnesota";
                }
                else if (numZip >= 63001 && numZip <= 65899) {
                    fullName = "Missouri";
                }
                else if (numZip >= 96950 && numZip <= 96952) {
                    fullName = "Northern Mariana Islands";
                }
                else if ((numZip >= 38601 && numZip <= 39776) || numZip == 71233) {
                    fullName = "Mississippi";
                }
                else if (numZip >= 59001 && numZip <= 59937) {
                    fullName = "Montana";
                }
                else if (numZip >= 27006 && numZip <= 28909) {
                    fullName = "North Carolina";
                }
                else if (numZip >= 58001 && numZip <= 58856) {
                    fullName = "North Dakota";
                }
                else if ((numZip >= 68001 && numZip <= 68118) || (numZip >= 68122 && numZip <= 69367)) {
                    fullName = "Nebraska";
                }
                else if (numZip >= 3031 && numZip <= 3897) {
                    fullName = "New Hampshire";
                }
                else if (numZip >= 7001 && numZip <= 8989) {
                    fullName = "New Jersey";
                }
                else if (numZip >= 87001 && numZip <= 88441) {
                    fullName = "New Mexico";
                }
                else if (numZip >= 88901 && numZip <= 89883) {
                    fullName = "Nevada";
                }
                else if (numZip == 6390 || (numZip >= 10001 && numZip <= 14975)) {
                    fullName = "New York";
                }
                else if (numZip >= 43001 && numZip <= 45999) {
                    fullName = "Ohio";
                }
                else if ((numZip >= 73001 && numZip <= 73199) || (numZip >= 73401 && numZip <= 74966)) {
                    fullName = "Oklahoma";
                }
                else if (numZip >= 97001 && numZip <= 97920) {
                    fullName = "Oregon";
                }
                else if (numZip >= 15001 && numZip <= 19640) {
                    fullName = "Pennsylvania";
                }
                else if ((numZip >= 601 && numZip <= 795) || (numZip >= 901 && numZip <= 988)) {
                    fullName = "Puerto Rico";
                }
                else if (numZip >= 96939 && numZip <= 96940) {
                    fullName = "Palau";
                }
                else if (numZip >= 2801 && numZip <= 2940) {
                    fullName = "Rhode Island";
                }
                else if (numZip >= 29001 && numZip <= 29948) {
                    fullName = "South Carolina";
                }
                else if (numZip >= 57001 && numZip <= 57799) {
                    fullName = "South Dakota";
                }
                else if (numZip >= 37010 && numZip <= 38589) {
                    fullName = "Tennessee";
                }
                else if (numZip == 73301 || (numZip >= 75001 && numZip <= 75501) || (numZip >= 75503 && numZip <= 79999) || (numZip >= 88510 && numZip <= 88589)) {
                    fullName = "Texas";
                }
                else if (numZip >= 84001 && numZip <= 84784) {
                    fullName = "Utah";
                }
                else if (numZip >= 20040 && numZip <= 24658) {
                    fullName = "Virginia";
                }
                else if (numZip >= 801 && numZip <= 851){
                    fullName = "Virgin Islands";
                }
                else if ((numZip >= 5001 && numZip <= 5495) || (numZip >= 5601 && numZip <= 5907)) {
                    fullName = "Vermont";
                }
                else if (numZip >= 98001 && numZip <= 99403) {
                    fullName = "Washington";
                }
                else if (numZip >= 53001 && numZip <= 54990) {
                    fullName = "Wisconsin";
                }
                else if (numZip >= 24701 && numZip <= 26886) {
                    fullName = "West Virginia";
                }
                else if (numZip >= 82001 && numZip <= 83128) {
                    fullName = "Wyoming";
                }
                res.json({ state: fullName });
            }
        })
    },

    register: function(req, res) {
        User.find({ email: req.body.email }, function(error, user) {
            if (user.length >= 1) {
                res.json({
                    regEmailError: 'An account with that email already exists.  Please use a different email.',
                    loggedIn: false
                });
            } else {
                var newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
                    userLevel: false,
                });
                newUser.reviews = [];
                newUser.listings = [];
                newUser.reservations = [];
                newUser.conversations = [];
                newUser.save(function(err, user) {
                    if (err) {
                        res.json({ error: err, loggedIn: false});
                    } else {
                        req.session.user = newUser;
                        res.json({ user: newUser, loggedIn: true});
                    }
                });
            }
        });
    },

    login: function (req, res) {
        User.find({email: req.body.email}, function(err, user){
            if (err) {
                res.json(err);
            } else {
                if (user.length > 0) {
                    if (bcrypt.compareSync(req.body.password, user[0].password)) {
                        req.session.user = user[0];
                        res.json({user: user[0], loggedIn: true});
                    } else {
                        res.json({passwordError: 'Password is incorrect. Please try again', loggedIn: false});
                    }
                } else {
                    res.json({emailError: 'Email not found, please register or try again',loggedIn: false});
                }
            }
        });
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.json(true);
    },

    update: function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) {
                console.log("Error", err);
            } else {
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.email = req.body.email;
                user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
                // user.phoneNum = req.body.phoneNum;
                user.save(function (err, user) {
                    if (err) {
                        res.json({ error: "Update attempt unsuccessful." });
                    } else {
                        res.json({ user: user });
                    }
                })
            }
        });
    },

    regHost: function (req, res) {
        User.findById(req.params.id, function (err, user) {
            if (err) {
                res.json({ error: err });
            } else {
                if(user.userLevel != false){
                    user.userLevel = true;
                    user.save(function (err, user) {
                        if (err) {
                            res.json({ error: 'Unable to register as host. Please try again.' });
                        } else {
                            res.json({ user: user });
                        }
                    })
                } else {
                    res.json({ user: user });
                }
            }
        });
    },

    current: function(req, res){
        if (req.session.user){
            var currentUser = req.session.user;
            res.json({user: currentUser});
        } else {
            res.json({error: "Could not find user", 'user': req.session.user});
        }
    }
}