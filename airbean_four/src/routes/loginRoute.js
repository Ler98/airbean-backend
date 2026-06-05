import express from "express";
import User from "../models/usersModel.js";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username, password });

    if (existingUser) {
      global.user = existingUser;

      return res.status(200).json({
        success: true,
        message: "Du loggade in",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Du har inte registrerat dig",
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
