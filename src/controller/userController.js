
import User from "../models/user.js";
import Token from "../utils/token.js";

export const register = async(req,res)=>{
  try {
    const {name,email,avator}= req.body;
    const userFind = await User.findOne({email});
    if(userFind){
        return res.status(200).json({
          userFind,
          token: Token(userFind._id),
        });
    }
    const user = new User({name,email,avator});
    await user.save();
    res.status(201).json({user, token: Token(user._id)});
  } catch (e) {
    res.status(500).json({msg:e.message});
    
  }
}

export const getUser=async(req,res)=>{
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    
    if(!user){
        return res.status(200).json({msg:"user not found"});
    }
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({msg:e.message});
    
  }
}
export const getAllUsers=async(req,res)=>{
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({msg:e.message});
    
  }
}

