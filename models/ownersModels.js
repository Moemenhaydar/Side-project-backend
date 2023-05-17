import mongoose from "mongoose";
const { Schema, model } = mongoose;
const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: "number",
    required: true,
  },
  social_media: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  delivery: {
    type: Boolean,
    default: true,
  },
});
ownerSchema.pre(["find", "findOne"], function () {
  this.populate(["category"]);
});
const Owner = model("Owner", ownerSchema);
export default Owner;
