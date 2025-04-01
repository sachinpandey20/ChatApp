import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, userId) => {
  return jwt.sign({ email, userId }, process.env.JWT_KEY, {
    expiresIn: maxAge,
  });
};
export const signup = async (request, Response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return Response.status(400).send("Email and password is required");
    }
    const user = await User.create({ email, password });
    Response.cookie("jwt", createToken(email, user.id), {
      maxAge,
      secure: true,
      sameSite: "None",
    });
    return Response.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        profileSetup: user.profileSetup,
      },
    });
  } catch (error) {
    console.log({ error });
    return Response.status(500).send("internal Server Error");
  }
};

export const login = async (request, Response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return Response.status(400).send("Email and password is required");
    }
    const user = await User.findOne({ email });
    if(!user){
      return Response.status(404).send("User with the given email not found");
    }
    const auth = await compare(password, user.password);
    if(!auth) {
      return Response.status(400).send("Password is incorrect.");

    }
    Response.cookie("jwt", createToken(email, user.id), {
      maxAge,
      secure: true,
      sameSite: "None",
    });
    return Response.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        profileSetup: user.profileSetup,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        color: user.color,
      },
    });
  } catch (error) {
    console.log({ error });
    return Response.status(500).send("internal Server Error");
  }
};
