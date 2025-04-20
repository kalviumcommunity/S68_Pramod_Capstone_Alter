const express = require("express");
const app = express();
app.use(express.json());

const connection = require("./src/database/database");
const { uploadImage, getImageInfo } = require("./src/utils/cloudinary")
const User = require("./src/controllers/user")

require("dotenv").config({
    path: "./src/config/.env",
});

const PORT = process.env.PORT;
const URL = process.env.URL;

app.listen(PORT, async () => {
    try {
        await connection(URL);
        console.log(`App is running at http://localhost:${PORT}`);
        // const publicId = await uploadImage('https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg');
        // const colors = await getImageInfo(publicId);
        // console.log("Image colors:", colors);
    }
    catch (error) {
        console.log("Error while running app \n", error);
    }
})

app.use("/user", User);