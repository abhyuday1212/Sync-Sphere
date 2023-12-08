//this is an api for handling signup
import bcrypt from "bcrypt";
import UserModel from "../model/user.js";

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
