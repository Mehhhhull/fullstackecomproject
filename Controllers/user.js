import {User} from "../Models/User.js";

export const register=async(req,res)=>{
  const {name,email,password}=req.body;
  try {
    let user=await User.create({name,email,password});
    res.json({message:"User Registered Successfully...!",success:true})
  } catch (error) {
    res.json({message:error.message})
  }
};