const express = require("express");
const app = express();



const mongoose = require('mongoose');
const port = process.env.PORT || 5001;
require('dotenv').config();
const cookieParser = require("cookie-parser");
const cors = require("cors");


app.use(express.json())
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);





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
app.use("/notes", require("./routers/noteRouter"));



app.listen(port, () => {
    console.log("PORT LISTENING")
})