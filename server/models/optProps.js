var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new mongoose.Schema({
    picture: { type: String },
    hometown: { type: String },
    bio: { type: String },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true});

mongoose.model('Property', PropertySchema);