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
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    image:{
        type:String,
        required:true,
    },
    

},{
    timestamps:true
})
productSchema.pre(['find','findOne'],function(){
    this.populate(['category'])
})
const Product = model("Product" , productSchema);
export default Product;