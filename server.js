import express, { json } from "express";
import 'dotenv/config';
import { connectDB } from "./config/db.js";
import productRoute from "./routes/product.route.js"
const app = express();
const PORT = process.env.PORT;

app.use(express.json()) // cho phep doc du lieu json tu body
// import route 
app.use('/api/products', productRoute);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`);
})