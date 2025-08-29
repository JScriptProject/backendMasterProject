import app from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port number... ${PORT}`);
    });
    app.on("error",(error)=>{
      console.log(`Error while starting server`, error);
      throw error;
    })
  })
  .catch((err) => {
    console.log("Mongo DB connection failed", err);
  });

/*
//have taken the IIFE
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.error("An Error occured while connecting to the database: ", error);
    throw error;
  }
 app.listen(PORT,()=>{
    console.log(`Server is listening on the port number ${process.env.PORT}`);
  })
  
  app.on("error",(error)=>{
    console.error("Issue while connecting to the server", error);
    throw error;
  })
 
})();
*/
