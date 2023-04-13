import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  editCategory,
} from "../controllers/categoryController.js";


router.post("/", createCategory);
router.get("/", getCategories);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);
router.patch("/:id", editCategory);

export default router;