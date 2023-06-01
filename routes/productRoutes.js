import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.js";
import upload from '../middleware/image.js'

router.post("/",upload, createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", upload, editProduct);

export default router;