import express from "express";
import { register } from "../Controllers/User.js";

const router = express.Router();

//register user
router.post("/register",register)

export default router;