import express from "express";
const router = express.Router();
import { home } from "../controllers/home_controller.js";


router.get("/", home);

export default router;