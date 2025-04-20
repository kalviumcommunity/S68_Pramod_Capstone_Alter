const mongoose = require("mongoose");

const Trip = new mongoose.Schema({
    rider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    pickupLocation: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    dropoffLocation: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    fare: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["requested", "accepted", "inProgress", "completed", "cancelled"], 
    },
    requestedAt: {
        type: Date,
        default: Date.now,
    },
    completedAt: {
        type: Date,
    }
})

const tripSchema = mongoose.model("Trip", Trip);

module.exports = tripSchema;