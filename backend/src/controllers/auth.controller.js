import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {

    const userFound = await User.findOne({ email });

    if (userFound) return res.status(400).json( ["User already exists"] );


    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: passwordHash });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) return res.status(401).json({ error: "incorrect password" });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFfound = await User.findById(req.user.id);
  if (!userFfound) return res.status(404).json({ error: "User not found" });
  res.json({
    id: userFfound._id,
    username: userFfound.username,
    email: userFfound.email,
    createdAt: userFfound.createdAt,
    updatedAt: userFfound.updatedAt,
  })
};
