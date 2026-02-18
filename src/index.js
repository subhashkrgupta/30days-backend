import { connectDB } from "./config/db.js";
import { app } from "./server.js";


const PORT = process.env.PORT || 4000;
 const startServer = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`your server is running on PORT->${PORT}`);
        })
    } catch (error) {
        console.log("Failed to connect server")
    }
 }

 startServer()