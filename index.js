import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/productRoutes.js";
import CategoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

await connectDB();

const PORT =process.env.PORT || 8000;

const app = new express();

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
}
app.use(express.json());

app.use("/product", ProductRoutes);
app.use("/category", CategoryRoutes);



app.listen(
    PORT,
    console.log(`server running in${process.env.NODE_ENV} mode on port ${PORT}`)
);