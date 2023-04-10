import Product from "../models/productModel.js";
import fs from "fs";
export function createProduct(req, res, next) {
  const product = new Product(req.body);
  product.save().then((response) => {
    res
      .status(200)
      .send({ status: 201, message: response })
      .catch((err) => {
        next(err);
      });
  });
}

export function getProducts(req, res, next) {
  Product.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function getProduct(req, res, next) {
  const { id } = req.params;
  Product.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteProduct(req, res, next) {
  const { id } = req.params;
  Product.findOneAndDelete({ _id: id })
    .then((response) => {
      fs.unlinkSync(response.image);
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}

export function editProduct(req, res, next) {
  const { id } = req.params;
  Product.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      if (req.body.image) fs.unlinkSync(response.image);
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
