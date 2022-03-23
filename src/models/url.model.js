const {model, Schema, Types} = require('mongoose');

const urlShortenerSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model('Url', urlShortenerSchema);