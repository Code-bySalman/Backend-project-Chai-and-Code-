import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async ()=>{
   try{
    await mongoose.connect(`mongodb+srv://bornin2002salman7:Salman123@backend-tutorial.pmzlw.mongodb.net`)
console.log("Backedn Connected!")
} 

   catch(error){
    console.log("ERROR: ", error)
  process.exit(1)
   }
}
export default connectDB