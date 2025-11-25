const mongoose = require("mongoose");
const dotenv = require('dotenv')

dotenv.config()

const connectDB async () => {
    try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("Connecting to DB is a success");
	} catch (error) {
		console.log("Error connecting to DB");
	}
};

module.exports = connectDB;
