import dotenv from "dotenv"

import connectDB from "./db/index2.js";
dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server running at : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed", err)
})