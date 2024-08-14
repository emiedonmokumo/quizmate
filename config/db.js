import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default connectDB;
