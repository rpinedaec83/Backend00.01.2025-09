import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ DB conected.")
    }catch(error){
        console.error("\n❌ Error connecting to the database → src/db/index.js\n\n", error);
    }
}