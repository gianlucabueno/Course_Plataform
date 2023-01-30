import express from "express";
import { addCourses, deleteCourses, getCourses, updateCourses } from "../controllers/courses.js";

const router = express.Router()

router.get("/courses", getCourses)

router.post("/courses", addCourses)

router.put("/courses:id", updateCourses)

router.delete("/courses:id", deleteCourses)

export default router