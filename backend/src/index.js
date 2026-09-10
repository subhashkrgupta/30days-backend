import { connectDB } from "./config/db.js";
import { app } from "./server.js";
import https from "node:https";


const PORT = process.env.PORT || 4000;
 const startServer = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`your server is running on PORT->${PORT}`);
        })

        if(process.env.NODE_ENV === "production") {
            setInterval(() => {
                https.get("https://three0days-full-stack-blog-app.onrender.com/health", (res) => {
                    console.log("Server is running");
                }).on("error", (err) => {
                    console.log("Error: " + err.message);
                })
            }, 14 * 60 * 1000); // Ping every 14 minutes
        }

    } catch (error) {
        console.log("Failed to connect server")
    }
 }

 startServer()