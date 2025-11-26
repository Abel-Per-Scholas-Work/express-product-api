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

/**
 * GET /:id
 * get a product by id
 */
const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			res.status(404).json({ message: "Invalid ID" });
		}
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

/**
 * PUT /:id
 * update a product
 */
const updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!product) {
			res.status(404).json({ message: "Invalid ID" });
		}
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
};

/**
 * DELETE /:id
 * update a product
 */
const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) {
			res.status(404).json({ message: "Invalid ID" });
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
	getProductById,
	updateProduct,
	deleteProduct,
};
