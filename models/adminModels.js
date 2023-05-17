import mongoose from "mongoose";
const {Schema,model}=mongoose;
const adminSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    },
    password:{
        type:String,
        required:true,
    }
    
    },
)

const Admin = model("Admin" , adminSchema);
export default Admin;