const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "cocoamit",
  api_key: "299825494982558",
  api_secret: "U2Qn2hKumupX2TsW78neJ9VqKFw",
  secure: true
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath);

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = uploadOnCloudinary;
