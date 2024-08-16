import { UserController } from "../controllers";
import express from "express";
const router = express.Router();

router.post("/createUser", UserController.createUser);
export default router;
