import mongoose from "mongoose";
const { Schema, model } = mongoose;
const scheduelSchema = new Schema({
  days: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  owners: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Owner",
  },
});
scheduelSchema.pre(["find", "findone"], function () {
  this.populate(["owners"]);
});
const Scheduel=model ("Scheduel")