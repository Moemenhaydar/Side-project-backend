import express from "express";
const router = express.Router();
import {
  createScheduel,
  getScheduels,
  getScheduel,
  deleteScheduel,
  editScheduel,
} from "../controllers/scheduelController.js";


router.post("/", createScheduel);
router.get("/", getScheduels);
router.get("/:id", getScheduel);
router.delete("/:id", deleteScheduel);
router.put("/:id", editScheduel);

export default router;