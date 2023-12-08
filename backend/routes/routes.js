import express from "express";
import { signupUser } from "../controller/user_controller.js";

const router = express.Router();

router.post("/signup", signupUser);

export default router;
