import Scheduel from "../models/scheduelModels.js";
export function createScheduel(req, res, next) {
    const scheduel = new Scheduel(req.body);
    scheduel.save().then((response) => {
      res
        .status(200)
        .send({ status: 201, message: response })
        .catch((err) => {
          next(err);
        });
    });
  }
  
  export function getScheduels(req, res, next) {
    Scheduel.find({})
      .then((data) => {
        res.status(200).send({ status: 200, message: data });
      })
      .catch((err) => {
        next(err);
      });
  }
  export function getScheduel(req, res, next) {
    const { id } = req.params;
    Scheduel.findById({ _id: id })
      .then((data) => {
        res.status(200).send({ status: 200, message: data });
      })
      .catch((err) => {
        next(err);
      });
  }
  
  export function deleteScheduel(req, res, next) {
    const { id } = req.params;
    Scheduel.findOneAndDelete({ _id: id })
      .then((response) => {
        
        res.status(200).send({ status: 200, message: response });
      })
      .catch((err) => {
        next(err);
      });
  }
  
  export function editScheduel(req, res, next) {
    const { id } = req.params;
    Scheduel.findOneAndUpdate({ _id: id }, req.body)
      .then((response) => {
        
        res.status(200).send({ status: 200, message: response });
      })
      .catch((err) => {
        next(err);
      });
  }