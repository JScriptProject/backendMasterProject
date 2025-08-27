import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server started on port number... ${PORT}`);
})


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