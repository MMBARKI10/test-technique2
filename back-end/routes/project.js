import express from "express"
import {verifyToken} from "../verifyToken.js"
const router = express.Router();

import {
    createProject,
    updateProject,
    deleteProject,
    getProject,
    getAllProject
} from "../controllers/project.js"

//create project
router.post("/",verifyToken,createProject);

//update project
router.put("/:id", verifyToken, updateProject);

//delete project
router.delete("/:id", verifyToken, deleteProject);

//get a project
router.get("/find/:id", getProject);

//get All project
router.get("/find", getAllProject);

export default router;