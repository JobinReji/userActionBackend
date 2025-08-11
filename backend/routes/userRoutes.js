import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import apiKeyAuth from "../middleware/apiKeyAuth.js";

const router = express.Router();

router.get("/", apiKeyAuth, getUsers);
router.post("/", apiKeyAuth, addUser);
router.put("/:id", apiKeyAuth, updateUser);
router.delete("/:id", apiKeyAuth, deleteUser);

export default router;
