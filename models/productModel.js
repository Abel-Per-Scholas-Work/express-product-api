const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		min: [1, "Must be great than 0"],
	},
	category: {
		type: String,
		required: true,
	},
	inStock: {
		type: Boolean,
		default: true,
	},
	tag: [String],
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("Product", ProductSchema);
