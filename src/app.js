import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app =express();

//cors configuration

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true,
    }
));

//adding some settig to recieve the data.
//specifiying the limit of file size to accept the files 
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true, limit:"16kb"}));
app.use(express.static("public"));
app.use(cookieParser());



export default app;