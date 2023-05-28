import mongoose from "mongoose";

const  connectDB = async () => {
    try {

        const databaseAddress = process.env.MONGO_URL

        await mongoose.connect(databaseAddress)

        console.log("conneted database")

    } catch (err) {
        console.log(err)
    }
}

export default connectDB