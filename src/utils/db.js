import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
       await mongoose.connect(process.env.URL).then(()=>{
           console.log("connected to database");
       });
    } catch (error) {
        console.log(error);
    }
}