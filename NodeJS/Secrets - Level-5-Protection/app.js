// this script is a way to create and handle cookies in your website.


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// initializers
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

//initializing a session    
app.use(session({
    secret: "Our little Secret",
    resave: false,
    saveUninitialized: false,
  }));

  //initializing a passport
  app.use(passport.initialize());
  app.use(passport.session());


mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

// initializing the passport-local-mongoose

userSchema.plugin(passportLocalMongoose);



const User = new mongoose.model("User", userSchema);


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.get("/secrets", (req,res)=>{
    if(req.isAuthenticated()){
        res.render("secrets");
    }else {
        res.redirect("/login");
    }
})

app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err);
            res.redirect("/secrets");
        }else{
            res.redirect("/");
        }
    });
    
});

// posters

app.post("/register", async(req, res)=>{

    User.register({username: req.body.username}, req.body.password,(err,user)=>{
        if(err){
            console.log(err);
            res.redirect("register");
        }else {
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/secrets");
            })
        }
    })

})


app.post("/login", async(req,res) =>{
    
    const user = new User({
        username: req.body.username,
        password:req.body.passport
    });

    req.login(user, (err)=>{
        if(err){
            console.log(err);
            res.redirect("/login");
        } else{
            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/secrets");
            });
        };
    });

});




app.listen(3000, ()=>{
    console.log("server started successfully");
})
