import express from "express";
import { signin, signup, logout, currentUser} from "../controllers/auth.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

// LOGOUT
router.get("/logout",logout); 

//CURRENT USER
router.get("/current-user",verifyToken, currentUser);




export default router;