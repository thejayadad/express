const express = require("express");
const app = express();



const mongoose = require('mongoose');
const port = process.env.PORT || 5001;
require('dotenv').config();


app.use(express.json())


const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB Connected");
})

//SETUP ROUTES
app.use("/auth", require("./routers/userRouter.js"))

app.listen(port, () => {
    console.log("PORT LISTENING")
})