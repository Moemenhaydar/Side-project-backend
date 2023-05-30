import Admin from "../models/adminModels.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export function createAdmin(req, res, next) {
  let password=req.body.password
  // let salt = bcrypt.genSaltSync(10)
  let hash = bcrypt.hashSync(password, 10)
  req.body.password=hash
  const admin = new Admin(req.body);
  admin.save().then((response) => {
    res
      .status(200)
      .send({ status: 201, message: response })
      
  }).catch((err) => {
    next(err);
  });;
}

export function getAdmins(req, res, next) {
  Admin.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function getAdmin(req, res, next) {
  const { id } = req.params;
  Admin.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteAdmin(req, res, next) {
  const { id } = req.params;
  Admin.findOneAndDelete({ _id: id })
    .then((response) => {
      
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}

export function editAdmin(req, res, next) {
  const { id } = req.params;
  Admin.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
export async function login(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body)
  
    if (!email || !password) {
     return  res
        .status(401)
        .json({ success: false, message: "please enter email and password" });
    }
    const response = await Admin.findOne({ email });
    if (!response) {
      return res.status(401).json({ success: false, message: "Email not found" });
    }
    if (!await bcrypt.compare(password,response.password)) {
      return res
        .status(401)
        .json({ success: false, message: "Password is incorrect" });
    }
    const token = jwt.sign({ _id: response._id ,role:"admin"}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user:response,
      token,
    });
  }