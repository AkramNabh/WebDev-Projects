require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption'); // an encryption import




// initializers
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

// this is the encryption key for retrieving data in case of forgetting

// this is the way to assign the encryption target with the specified key.
userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password']});

const User = new mongoose.model("User", userSchema);


//




// getters

app.get("/", (req, res)=>{
    res.render("home");
})

app.get("/login", (req, res)=>{
    res.render("login");
})

app.get("/register", (req, res)=>{
    res.render("register");
})


// posters

app.post("/register", async(req, res)=>{
    const user = new User({
        email: req.body.username,
        password: req.body.password
    })
    try{
       await user.save();
        res.render("secrets");
    } catch(err){
        console.log(err);
    }
    
    res.render("secrets");
})


app.post("/login", async(req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const data = await User.findOne({email: username});
    if(data){
        if(data.password == password){
            res.render("secrets");
        } else{
            console.log("your password is wrong");
        }
    } else{
        console.log("user not found :D");
    }
})





app.listen(3000, ()=>{
    console.log("server started successfully");
})
