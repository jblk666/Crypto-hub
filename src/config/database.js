'use strict';

const mongoose = require('mongoose');

const dbConfig = {
    host: 'localhost',
    port: 27017,
    dbName: 'crypto_hub',
};

mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection established.'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;