const { connect } = require("mongoose");

const database = async (URL) => {
    try {
        await connect(URL);
        console.log("Database successfully connected");
    }
    catch (error) {
        console.log("Error connecting to database \n", error);
    }
}

module.exports = database;