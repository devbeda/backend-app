import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from './app.js'

dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running at port: ${process.env.PORT}`);
  })
  app.on("error", (error) => {
    console.log("Erro: ",error);
    throw(error)
  })
})
.catch((error) => {
  console.log("MongoDB connection faild !!!", error);
})







// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw error;
//   }
// })();
