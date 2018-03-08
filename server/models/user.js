const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    userLevel: { type: Boolean },
    zipCode: { type: String },
    phoneNumber: { type: String },
    conversations: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    reservations: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }],
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    optionalProperties: [{ type: Schema.Types.ObjectId, ref: 'Property' }]
}, { timestamps: true });

UserSchema.plugin(uniqueValidator);

mongoose.model('User', UserSchema);