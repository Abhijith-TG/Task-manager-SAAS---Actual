import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongoURL = process.env.MONGOURL;

if(!mongoURL){
    console.error("mongoURL not set !");
    process.exit(1)
}

export const connectDB = async()=>{
    try {
        await mongoose.connect(mongoURL)
        console.log("Database connected successfully!")
    } catch (error:any) {
        console.log(error.message || "failed to connect")
        process.exit(1)
    }
}