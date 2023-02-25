const Note = require("./models/Note");
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const port = process.env.PORT || 5000;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', false);

mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.get("/Note", (req, res) => {
    res.send("Notes will be here")
})


const stuff = new Note ({
    title: "Title of Note 2",
    content: "Content of the note will go here 2",

})
stuff.save().then(stuff => {
})
.catch(e => {
    console.log(e);
})

app.listen(5000, () => {
    console.log("We are going on the port")
})