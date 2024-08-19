import { UserController } from "../controllers";
import express from "express";
const router = express.Router();

router.post("/createUser", UserController.createUser);
router.post("/log-in",UserController.login)
export default router;
