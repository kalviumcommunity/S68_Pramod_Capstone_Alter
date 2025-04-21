const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    isDriver: {
        type: Boolean,
        default: false,
    },
    driverDetails: {
        licenseNumber: { type: String },
        vehicleModel: { type: String },
        vehicleNumberPlate: { type: String },
    },
    currentLocation: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point",
        },
        coordinates: {
            type: [Number],
            default: [0, 0],
        },
    },
    addresses: [
		{
			country: { type: String },
			city: { type: String },
			address1: { type: String },
			address2: { type: String },
			zipCode: { type: Number },
			addressType: { type: String },
		}
	],
    selectedAddress: {
        type: Number,
        default: 0,
    },
    profilePicture: {
        type: String,
        default: 'https://res.cloudinary.com/kora264/image/upload/v1745152145/default-profile-account-unknown-icon-black-silhouette-free-vector_o32daw.jpg'
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trip",
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const userSchema = mongoose.model("User", User)

module.exports = userSchema;