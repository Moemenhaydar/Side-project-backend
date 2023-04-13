import mongoose from "mongoose";
const {Schema,model}=mongoose;
const categorySchema =new Schema({

    name:{
        type:String,
        required:true
    },
    
    

},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
})
const Category = model ("Category" , categorySchema);
export default Category;