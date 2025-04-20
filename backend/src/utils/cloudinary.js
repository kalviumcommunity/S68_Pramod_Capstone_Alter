const cloudinary = require("cloudinary").v2;

require("dotenv").config({ 
    path: "src/config/.env" 
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

console.log(cloudinary.config());

const uploadImage = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: true,
        overwrite: true,
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.public_id;
    }
    catch (error) {
        console.log("Error uploading image to Cloudinary \n", error);
    }
}

const getImageInfo = async (publicId) => {
    const options = {
        options: true,
    };

    try {
        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
    }
    catch (error) {
        console.log("Error retrieving image details \n", error);
    }
}

module.exports = {
    uploadImage,
    getImageInfo
};