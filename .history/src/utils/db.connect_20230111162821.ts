import mongoose from "mongoose";
import config from 'config';


async function connectDb{
    const mongoUri = config.get<string>('mongoUri')
    await mongoose.connect(mongoUri);
    return console.log("database is connected");
}
export default connectDb