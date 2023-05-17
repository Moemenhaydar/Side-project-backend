import Category from "../models/categoryModels.js";
export function createCategory(req, res, next) {
  const category = new Category(req.body);
  category.save().then((response) => {
    res
      .status(200)
      .send({ status: 201, message: response })
      
      }).catch((err) => {
        next(err);
  });
}

export function getCategories(req, res, next) {
  Category.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function getCategory(req, res, next) {
  const { id } = req.params;
  Category.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteCategory(req, res, next) {
  const { id } = req.params;
  Category.findOneAndDelete({ _id: id })
    .then((response) => {
     res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}

export function editCategory(req, res, next) {
  const { id } = req.params;
  Category.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
