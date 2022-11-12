import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    mobile: String,
    country: String,
    
});

const user=mongoose.model("user", userSchema);
export default user;