const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
            // No need for useNewUrlParser and useUnifiedTopology options anymore
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);  // Exit the process if connection fails
    }
};

module.exports = connectDB;
