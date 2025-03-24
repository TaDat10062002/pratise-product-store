import express from "express";
const router = express.Router();
import Product from "../model/product.mode.js";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller.js";

// read
router.get('/', getProduct)

// create 
router.post('/', createProduct)

// delete
router.delete('/:id', deleteProduct);

// update
router.put('/:id', updateProduct);

export default router;
