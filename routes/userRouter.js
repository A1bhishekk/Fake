import express from 'express';
// import user from '../idSchema.js';

const router = express.Router();
import user from '../models/userSchema.js';


// create user

router.post('/users',async (req,res)=>{
    const {name,age,email,mobile,country}=req.body;
    try{
        const newUser=new user({name,age,email,mobile,country});
        await newUser.save();
        res.status(201).json({message:"User added successfully"});
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
});


export default router;