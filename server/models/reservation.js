var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservationSchema = new mongoose.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    amtGuests: { type: Number, required: true },
    // bookStatus for host to approve reservation after guest attempts booking
    bookStatus: { type: Boolean },
    _booker: { type: Schema.Types.ObjectId, ref: 'User' },
    _listing: { type: Schema.Types.ObjectId, ref: 'Listing' }
}, {timestamps: true});

mongoose.model('Reservation', ReservationSchema);