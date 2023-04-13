import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.js";


router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", editProduct);

export default router;