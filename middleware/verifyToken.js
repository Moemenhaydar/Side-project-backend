import Admin from "../models/adminModels";
import Owner from "../models/ownersModels";

const userRole={
  "admin":Admin,
  "owner":Owner
}
export const verifyOwner = async (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({ success: false, error: 'Authorization required' });
    }
  
    
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { role} = decoded;
    const Model= userRole[role] ;
    req.role=role
    req.user = await Model.findById( decoded._id );
    if(!req.user){
      return res.status(401).send({success:false,message:`no ${role} found`})
    }
    next();
  
  };
  
export const allowAcces=(array)=>{
  return (req,res,next)=>{
    if(array.includes(req.role)){
      next()
    }
    else{
      return res.status(401).json({success:false,error:"you are not authorized to access this route"})
      }
  }
}