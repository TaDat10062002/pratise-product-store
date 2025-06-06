import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
});

const Product = mongoose.model("Product", productSchema);
export default Product;