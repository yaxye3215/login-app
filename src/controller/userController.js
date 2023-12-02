
import User from "../models/user.js";


export const register = async(req,res)=>{
    const {name,email,avator}= req.body;
    const userFind = await User.findOne({email});
    if(userFind){
        return res.status(400).json({msg:"login user"});
    }
    const user = new User({name,email,avator});
    await user.save();
    res.status(201).json(user);
}

export const getUser=async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    
    if(!user){
        return res.status(404).json({msg:"user not found"});
    }
    res.status(200).json(user);
}
