const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/connection");
const dotenv = require("dotenv");

//connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;
// ===middleware===
app.use(express.json());
app.use(morgan("dev"));

/**
 * GET /
 */
app.get("/", (req, res) => {
	res.send("Welcome to Bibi Store");
});

app.listen(PORT, () => {
	console.log(`Sever is running on port: ${PORT}`);
});
