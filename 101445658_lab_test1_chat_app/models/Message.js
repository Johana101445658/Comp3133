const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    from_user: { type: String, required: true },
    room: { type: String },
    to_user: { type: String },
    message: { type: String, required: true },
    date_sent: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Message", MessageSchema);
