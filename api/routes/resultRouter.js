import express from "express";
import { findStudentResultController, postFormController } from "../controllers/resultController.js";
const router = express.Router();


// route for post form
router.post("/post-form", postFormController);
// route for post form
router.post("/get-your-result", findStudentResultController);


export default router;
