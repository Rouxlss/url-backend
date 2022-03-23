const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
        ? process.env.MONGODB_URI
        : 'mongodb+srv://newuser:password12345@url-shortener.45ffm.mongodb.net/test';

mongoose.connect(URI, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})