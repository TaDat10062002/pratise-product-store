
import Product from "../model/product.mode.js";
import mongoose from "mongoose";

export const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(
            {
                success: true,
                data: products
            }
        );
    } catch (error) {
        console.log('Error in Fetching products');
        res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;
        const newProduct = await Product.create({
            name,
            price,
            image
        })
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(`Failed to create product ${error.message}`);
        res.status(500).json({
            success: false,
            message: `Server Error`
        })
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        })
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Product has been deleted successfully'
        })
    } catch (error) {
        console.log(`Failed to delete product ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({
            success: false,
            message: "Invalid Product Id"
        })
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({
            success: true,
            data: updatedProduct,
            message: 'Product has been updated successfully'
        })
    } catch (error) {
        console.log(`Failed to update product ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Internal Server Errro"
        })
    }
}