//this is an api for handling signup
import bcrypt from "bcrypt";
import UserModel from "../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../model/token.js";
dotenv.config();
import mongoose from "mongoose";
// *-*-*-*-**-*-*-*-*-*-*-*-*-***-*-*-*-*--

export const signupUser = async (request, response) => {
  try {
    // const salt = await bcrypt.genSalt()  -> purana syntax
    // const hasedPassword = await bcrypt.hash(request.body.password,salt)

    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };

    const ExistingUser = await UserModel.findOne({ username: request.body.username })

    if (ExistingUser) {
      return response.status(400).send("Username already exists...")
    }

    const newUser = new UserModel(user);
    await newUser.save();

    return response.status(200).json({ msg: "signup successful" });
  } catch (error) {
    console.log("Error:", error);
    return response
      .status(500)
      .json({ msg: "Error while signing up the user" });
  }
};

// *-*-*-*-**-*-*-*-*-*-*-*-*-***-*-*-*-*--

export const loginUser = async (request, response) => {
  try {
    let user = await UserModel.findOne({ username: { $regex: new RegExp('^' + request.body.username + '$', 'i') } });

    if (!user) {
      return response.status(400).json({ msg: "Invalid credentials" });

    }

    try {
      let match = await bcrypt.compare(request.body.password, user.password);
      if (match) {

        console.log("Match:", match);

        const accessToken = jwt.sign(
          user.toJSON(),
          process.env.ACCESS_SECRET_KEY,
          { expiresIn: "15m" }
        );
        const refreshToken = jwt.sign(
          user.toJSON(),
          process.env.REFRESH_SECRET_KEY
        );

        const newToken = new Token({ token: refreshToken });
        await newToken.save();

        return response.status(200).json({
          accessToken: accessToken,
          refreshToken: refreshToken,
          name: user.name,
          username: user.username,
        });
      } else {
        return response.status(400).json({ msg: "Password does Not Match" });
      }
    } catch (error) { }
  } catch (error) {
    console.log("Error:", error);
    return response.status(500).json({ msg: "Error while Loging in the user" });
  }
};

export const checkUsername = async (request, response) => {
  const { username } = request.body;

  try {

    const user = await UserModel.findOne({ username });

    const exists = !!user;

    response.status(200).json({ isSuccess: !exists });
  } catch (error) {
    console.error('Error checking username:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};