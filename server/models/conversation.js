var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConversationSchema = new mongoose.Schema({
    _guest: { type: Schema.Types.ObjectId, ref: 'User' },
    _listing: { type: Schema.Types.ObjectId, ref: 'Listing' },
    host: { type: Schema.Types.ObjectId, ref: 'User' },
    messageList: [{
        subject: { type: String },
        content: { type: String },
        readStatus: { type: Boolean, default: false },
        sender: { type: Schema.Types.ObjectId },
        recipient: { type: Schema.Types.ObjectId },
        sentAt: { type: Date, default: Date.now() }
    }]
});

mongoose.model('Conversation', ConversationSchema);