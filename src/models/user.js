import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avator: {
        type: String,
        default: "",
    },

    
});

const User = mongoose.model("users", userScheme);
export default User;