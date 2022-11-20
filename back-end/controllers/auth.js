import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";


//SIGNUP

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};


//SIGNIN

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT,{ expiresIn: "5d" });
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

//LOGNOUT
export const logout = async(req, res,next)=>{
  try{
    res.clearCookie("token");
    return res.json({message : 'ssignout succes'});
  }catch(err){
    console.log(err)
  }   
}

//CURRENT USER
export const currentUser = async (req, res,next) => {
  try {
    const user = await User.findById(req.auth._id).select("-password").exec();
    console.log("CURRENT_USER", user);
    return res.json(user);
  } catch (err) {
    console.log(err);
    res.send(err);
  } 
};

