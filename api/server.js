import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import mongoDbConnection from "./database/database.js";
import resultRouter from "./routes/resultRouter.js";


const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors());

// routes
app.use("/api/v1/result", resultRouter);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, (err) => {
    if(err){
        console.log(`Server running failed at ${PORT} PORT`.bgRed.white);
    }else{
        mongoDbConnection();
        console.log(`Server running successfull at ${PORT} PORT`.bgGreen.white);
    }
});
