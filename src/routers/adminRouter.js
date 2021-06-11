import express from "express";
import {
    classController,
    studentController,
} from "../controllers/adminController";

const adminRouter = express.Router();

adminRouter.get("/class", classController);
adminRouter.get("/student", studentController);

export default adminRouter;