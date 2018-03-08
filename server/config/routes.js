// Require statments
var mongoose = require('mongoose');
var listings = require('../controllers/listings.js');
var locations = require('../controllers/locations.js');
var conversations = require('../controllers/conversations.js');
var reservations = require('../controllers/reservations.js');
var reviews = require('../controllers/reviews.js');
var users = require('../controllers/users.js');
// var properties = require('../controllers/optProps.js');

// Model imports
var Listing = mongoose.model('Listing');
var Location = mongoose.model('Location');
var Conversation = mongoose.model('Conversation');
var Reservation = mongoose.model('Reservation');
var Review = mongoose.model('Review');
var User = mongoose.model('User');
var Property = mongoose.model('Property');

module.exports = function (app) {
    // ----------------
    // - GET requests -
    // ----------------

    // Users
    app.get('/api/users/current', function(req, res){
        users.current(req, res);
    })

    app.get('/api/users/logout', function(req, res){
        users.logout(req, res);
    })

    app.get('/api/users/:id', function(req, res) {
        // users.findOne(req, res); CREATE THIS FUNCTION
    })

    // User Properties


    // Listings
    app.get('/api/listings', function(req, res){
        listings.findAll(req, res);
    })

    app.get('/api/users/:id/listings', function(req, res){
        listings.findAllUser(req, res);
    })

    app.get('/api/listings/landing/recent', function(req, res){
        listings.findRecentLanding(req, res);
    })

    app.get('/api/listings/listings/recent', function(req, res){
        listings.findRecentListing(req, res);
    })

    app.get('/api/listings/:id', function(req, res) {
        listings.findOne(req, res);
    })

    // Reservations
    app.get('/api/users/:id/reservations', function(req, res){
        reservations.show2(req, res);
    })

    app.get('/api/users/:id/reservations/:rId', function(req, res) {
        reservations.find(req, res);
    })  
    
    // Reviews
    app.get('/api/listings/:id/reviews', function(req, res){
        reviews.show(req, res);
    })

    // Conversations
    app.get('/api/users/:id/inbox/guest', function(req, res){
        conversations.showGuest(req, res);
    })
    
    app.get('/api/users/:id/inbox/host', function(req, res) {
        conversations.showHost(req, res);
    })
    
    app.get('/api/users/:id/inbox/messages/:mId', function(req, res){
        conversations.find(req, res);
    })

    // Locations
    app.get('/api/locations/last', function(req, res){
        locations.lastCreated(req, res);
    })

    // -----------------
    // - POST requests -
    // -----------------

    // Users
    app.post('/api/users/register', function(req, res) {
        users.register(req, res);
    })

    app.post('/api/users/login', function(req, res){
        users.login(req, res);
    })

    app.post('/api/users/:id/update', function(req, res){
        users.update(req, res);
    })

    app.post('/api/users/:id/host', function(req, res){
        users.regHost(req, res);
    })

    // User Properties
    

    // Listings
    app.post('/api/listings/create', function(req, res){
        console.log("Hit create listings route");
        listings.create(req, res);
    })

    app.post('/api/listings/:id/update', function(req, res){
        listings.update(req, res);
    })

    app.post('/api/listings/search', function(req, res){
        listings.search(req, res);
    })

    // Reservations
    app.post('/api/reservations/create', function(req, res) {
        reservations.create(req, res);
    })

    app.post('/api/reservations/:id/approve', function(req, res) {
        reservations.approve(req, res);
    })

    app.post('/api/reservations/:id/update', function (req, res) {
        reservations.update(req, res);
    })

    // Reviews
    app.post('/api/listings/:id/reviews/create', function(req, res) {
        reviews.create(req, res);
    })

    // Conversations
    app.post('/api/users/:id/messages/create/guest', function(req, res){
        conversations.createAsGuest(req, res);
    })

    app.post('/api/users/:id/messages/create/host', function(req, res){
        conversations.createAsGuest(req, res);
    })

    // Locations
    app.post('/api/locations/create', function(req, res){
        locations.create(req, res);
    })

    // Catch-all route
    // app.all("*", (req, res, next) => {
    //     res.sendFile(path.resolve("./frontEnd/dist/index.html"));
    // })

}