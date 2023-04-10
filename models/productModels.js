import mongoose from "mongoose";
const {Schema,model}=mongoose;
const productSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    timetamps:{
        createdAt:"created_at",
        updatedAt:"updated_at",
    },

})
const Product = model ("Product" , productSchema);
export default Product;