var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new mongoose.Schema({
    city: { type: String, required: true, minlength: 2 },
    state: { type: String, required: true, minlength: 2},
    zipCode: { type: String, required: true, minlength: 5 },
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }]
}, { timestamps: true });

mongoose.model('Location', LocationSchema);
