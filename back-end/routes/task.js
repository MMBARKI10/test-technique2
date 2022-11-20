import express from "express"
import {verifyToken} from "../verifyToken.js"
const router = express.Router();

import {
    createTask,
    updateTask,
    deleteTask,
    getTask,
    getAllTask
} from "../controllers/task.js"

//create project
router.post("/",verifyToken,createTask);

//update Task
router.put("/:id", verifyToken, updateTask);

//delete Task
router.delete("/:id", verifyToken, deleteTask);

//get a Task
router.get("/find/:id", getTask);

//get All Task
router.get("/find", getAllTask);

export default router;