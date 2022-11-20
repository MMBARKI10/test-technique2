import express from "express"
import {verifyToken} from "../verifyToken.js"
const router = express.Router();

import {
    update,
    deleteUser,
    getUser,
    getAllUser
} from "../controllers/user.js"

//update user
router.put("/:id", verifyToken, update);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

//get All user
router.get("/find", getAllUser);

export default router;