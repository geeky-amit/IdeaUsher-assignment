const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/ideaUsher`
    );

    console.log(
      `\nMongoDB connected || DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
