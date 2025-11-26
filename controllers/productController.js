const Product = require("../models/productModel");

/**
 * GET /
 * get all products
 */

const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		if (!products) {
			res.status(400).json({ message: "Invalid URL" });
		}
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error fetching product from server" });
	}
};

/**
 * POST /
 * create a new product
 */
const createProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		if (!product) {
			res.status(400).json({ message: "Failed to create a new product" });
		}
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllProducts,
	createProduct,
};
