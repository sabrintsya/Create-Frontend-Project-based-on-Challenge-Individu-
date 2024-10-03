import express, { Router } from "express";
import { createCourse } from "../controllers/courseCntrl.js";
const router = express.Router();

router.post("/create", createCourse)

export {router as courseRoute}