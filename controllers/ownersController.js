import Owner from "../models/ownersModels.js";
import fs from "fs";
export function createOwner(req, res, next) {
  const owner = new Owner(req.body);
  owner.save().then((response) => {
    res
      .status(200)
      .send({ status: 201, message: response })
      .catch((err) => {
        next(err);
      });
  });
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

// const OwnerController = {
//     editOwner,
//     deleteOwner,
//     getOwner,
//     getOwners,
//     createOwner,
// }

// export default OwnerController