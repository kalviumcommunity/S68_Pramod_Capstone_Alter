const { Router } = require("express");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

require("dotenv").config({
    path: "./src/config/.env"
});

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

userRouter.post("/create-user", async (request, response) => {
    const { password } = request.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const newUser = new userModel({
            ...request.body,
            password: hashedPassword,
        });
        await newUser.save();

        return response.status(200).json({
            message: "user successfully created",
        });
    }
    catch (error) {
        return response.status(500).json({
            message: "error creating user",
            error: error
        });
    }
})

module.exports = userRouter;