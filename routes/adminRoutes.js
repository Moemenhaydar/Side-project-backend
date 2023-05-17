import express from "express";
const router = express.Router();
import {
    createAdmin,
    getAdmins,
    getAdmin,
    deleteAdmin,
    editAdmin,
    login,
} from "../controllers/adminController.js";
// import AdminController from "../controllers/AdminsController";

router.post("/login",login)
router.post("/", createAdmin);
router.get("/", getAdmins);
router.get("/:id", getAdmin);
router.delete("/:id", deleteAdmin);
router.put("/:id", editAdmin);

export default router;