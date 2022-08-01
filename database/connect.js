const mongoose = require("mongoose");

const connectDB = async (url) => {
	try {
		await mongoose.connect(url);
		console.log("Database Connected");
	} catch(e) {
		// statements
		console.log(e);
	}
}

module.exports = connectDB