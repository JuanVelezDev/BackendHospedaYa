import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dgwl78wtf",
    api_key: process.env.CLOUDINARY_API_KEY || "672867292628762",
    api_secret: process.env.CLOUDINARY_API_SECRET || "infhRtNq0tMBfW3nsO-X9gYg7Es"
});

export default cloudinary;