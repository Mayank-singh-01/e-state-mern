import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/Error.js";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {

    if ([username, email, password].some((field) => !field?.trim())) {
      return next(errorHandler(400, "All fields are required."));
    }

    // Validate password length
    if (password.length <= 5) {
      return next(
        errorHandler(400, "Password must be more than 5 characters.")
      );
    }

    // Check if the user already exists
    const existedUser = await User.findOne({email});

    if (existedUser) {
      return next(
        errorHandler(409, "User with this email already exists.")
      );
    }

    // Hash the password asynchronously
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the new user
    await newUser.save();
    return res.status(201).json("User created successfully");

  } catch (error) {

    if (!(error instanceof mongoose.Error)) {
      return next(errorHandler(550, "Error occurred while creating the user"));
    }
    return next(error);
  }
};


export const signin = async (req,res,next) =>{
  const {email, password} = req.body;

  try {

    const validUser = await User.findOne({email});
    if(!validUser) return next(errorHandler(404,"User not fond !"));


    const validPassword = bcryptjs.compareSync(password,validUser.password) ; 
    if (!validPassword) return next(errorHandler(401, "Incorrect email or password"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;

     res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
      
  } catch (error) {
    next(error);
  }
} 