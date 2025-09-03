import mongoose  from "mongoose";

const connectioToMongoDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/note_app")
        console.log("Connection to MongoDB")
    }catch(err){
        console.log("Error connecting to MongoDB",err.message)
    }
}
export default connectioToMongoDB