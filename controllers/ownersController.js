import Owner from "../models/ownersModels.js";
import bcrypt from "bcrypt";
import fs from "fs";
import  jwt  from "jsonwebtoken";
export async function createOwner(req, res, next) {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const owner = new Owner(req.body);
  owner
    .save()
    .then((response) => {
      res.status(200).send({ status: 201, message: response });
    })
    .catch((e) => res.status(500).json({ message: e.message }));
}

export function getOwners(req, res, next) {
  Owner.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function getOwner(req, res, next) {
  const { id } = req.params;
  Owner.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteOwner(req, res, next) {
  const { id } = req.params;
  Owner.findOneAndDelete({ _id: id })
    .then((response) => {
      fs.unlinkSync(response.image);
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}

export function editOwner(req, res, next) {
  const { id } = req.params;
  Owner.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      if (req.body.image) fs.unlinkSync(response.image);
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
  const response = await Owner.findOne({ email });
  console.log(response)
  if (!response) {
    return res.status(401).json({ success: false, message: "Email not found" });
  }
  if (!await bcrypt.compare(password,response.password)) {
    return res
      .status(401)
      .json({ success: false, message: "Password is incorrect" });
  }
  const token = jwt.sign({ _id: response._id,role:"owner" }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
  });
}

// const OwnerController = {
//     editOwner,
//     deleteOwner,
//     getOwner,
//     getOwners,
//     createOwner,
// }

// export default OwnerController
