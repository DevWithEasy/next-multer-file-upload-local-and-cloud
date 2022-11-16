import mongoose from 'mongoose';

export default async function initDatabase(){
    if (mongoose.connection.readyState === 1){
        console.log('Connected to database');
        return mongoose.connection.asPromise()
    }
    return await mongoose.connect(process.env.MONGO_URI)
}