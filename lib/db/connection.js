import mongoose from "mongoose";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://localhost/plants").catch((err) => {
  console.log(`Error connecting to MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB.");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;