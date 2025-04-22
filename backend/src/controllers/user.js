const { Router } = require("express");
const userRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");

require("dotenv").config({
    path: "./src/config/.env"
});

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

userRouter.get("/get-user", async (request, response) => {
    try {
        const users = await userModel.find();

        return response.status(200).json({
            message: "users successfully retrieved",
            users: users,
        })
    }
    catch (error) {
        return response.status(500).json({
            message: "error retrieving users",
            error: error,
        })
    }
})

userRouter.get('/get-one-user', async (request, response) => {
    try {
        const { email } = request.query;

        if (!email) {
            return response.status(400).json({ 
                message: 'email is required!' 
            });
        }

        const user = await userModel.findOne({ email: email });

        if (!user) {
            return response.status(404).json({ 
                message: 'user not found!' 
            });
        }

        const { password, ...userDetails } = user.toObject();
        response.json({ 
            user: userDetails 
        });
    } 
    catch (error) {
        console.error(error);
        response.status(500).json({ 
            message: 'internal server error',
            error: error, 
        });
    }
});

userRouter.post("/create-user", async (request, response) => {
    const { password, confirmPassword, ...rest } = request.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    try {
        console.log("Request received with body:", request.body);
        const newUser = new userModel({
            ...rest,
            password: hashedPassword,
        });
        await newUser.save();
    
        return response.status(200).json({
            message: "user successfully created",
        });
    } 
    catch (error) {
        console.error("Error while creating user:", error);
        return response.status(500).json({
            message: "error creating user",
            error: error,
        });
    }    
})

userRouter.put('/update-address', async (request, response) => {
    try {
        const { email, addressIndex, newAddress } = request.body;

        if (!email || !newAddress) {
            return response.status(400).json({ 
                message: 'email and new address are required.' 
            });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return response.status(404).json({
                message: 'user not found.' 
            });
        }

        if (addressIndex !== undefined && user.addresses[addressIndex]) {
            user.addresses[addressIndex] = newAddress;
        } 
        else {
            user.addresses.push(newAddress);
        }

        await user.save();

        response.json({
            message: 'address updated successfully!',
            addresses: user.addresses,
        });
    } 
    catch (error) {
        console.error(error);
        response.status(500).json({ 
            message: 'internal server error', 
            error: error, 
        });
    }
});

userRouter.put('/update-user', async (request, response) => {
    try {
        const { email, updates } = request.body;

        if (!email || !updates) {
            return response.status(400).json({ 
                message: 'email and updates are required.' 
            });
        }

        const updatedUser = await userModel.findOneAndUpdate(
            { email },
            { $set: updates },
            { new: true }
        );

        if (!updatedUser) {
            return response.status(404).json({ 
                message: 'user not found.' 
            });
        }

        const { password, ...userDetails } = updatedUser.toObject();
        response.json({ 
            message: 'user updated successfully', 
            user: userDetails 
        });
    } 
    catch (error) {
        console.error(error);
        response.status(500).json({ 
            message: 'internal server error', 
            error: error, 
        });
    }
});


userRouter.delete("/delete-user", async (request, response) => {
    const { email } = request.body;

    try {
        if (!email) {
            return response.status(400).json({ 
                message: 'email is required.' 
            });
        }

        const deletedUser = await userModel.findOneAndDelete({ email });

        if (!deletedUser) {
            return response.status(404).json({ 
                message: 'user not found' 
            });
        }

        response.json({ 
            message: 'user deleted successfully' 
        });
    } 
    catch (error) {
        console.error(error);
        response.status(500).json({ 
            message: 'internal server error', 
            error: error, 
        });
    }
})


module.exports = userRouter;