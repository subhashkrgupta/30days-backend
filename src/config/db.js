import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try {
        if(!process.env.MONGO_URI){
            console.log("MongoDB url not found ")
            process.exit(1)
        }
        await mongoose.connect(`${process.env.MONGO_URI}/30daysbackend`)
        console.log("MongoDB connected successfully")
    } catch (error) {
        console.log("MongoDB connection failed !!",error);
        process.exit(1)
    }
}