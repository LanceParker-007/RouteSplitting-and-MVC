import express from "express";
// import admin from "./firebaseConfig.js";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

//Creating app
const app = express();
export default app;
//connecting db

//Middleware
app.use(express.json());//Req.body
app.use(express.urlencoded({ extended: true }));//HTML forms
app.use("/users", userRouter);

//Config ENV file path
config({
    path: "./databaseConnection/config.env"
})



//Normal routing api
app.get("/", async (req, res) => {
    return res.send("Hello Route Splitting and MVC");
})

//Creating REST APIs

//App is listening here
