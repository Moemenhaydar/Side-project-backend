import express from "express";
const router = express.Router();
import {
    createOwner,
    getOwners,
    getOwner,
    deleteOwner,
    editOwner,
} from "../controllers/ownersController.js";
// import OwnerController from "../controllers/ownersController";
import upload from "../middleware/image.js"

router.post("/",upload, createOwner);
router.get("/", getOwners);
router.get("/:id", getOwner);
router.delete("/:id", deleteOwner);
router.put("/:id", editOwner);

export default router;
