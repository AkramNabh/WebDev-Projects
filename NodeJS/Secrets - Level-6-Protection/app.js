// this method is using third party applications to do the verifications.
// such as googl oauth which you sign in with your google account to sign in to the website


require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

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


  //google authentication
  passport.use(new GoogleStrategy({
    clientID: process.env.ID,
    clientSecret: process.env.SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String
})

// initializing the passport-local-mongoose

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User = new mongoose.model("User", userSchema);


passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });

//




// getters

app.get("/", (req, res)=>{
    res.render("home");
})


app.get("/auth/google",(req,res)=>{

    passport.authenticate('google', { scope: ['profile'] });
})

app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secrets');
  });

app.get("/login", (req, res)=>{
    res.render("login");
})

app.get("/register", (req, res)=>{
    res.render("register");
})

app.get("/secrets",async (req,res)=>{

    try{
        const data = await User.find({"secrets": {$ne: null}});
        res.render("secrets", {
            usersWithSecrets: data
        });
    } catch (err){
        console.log(err);
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

app.get("/submit",(req, res)=>{
    if(req.isAuthenticated()){
        res.render("submit");
    } else{
        res.redirect("/login");
    }
})

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

app.post("/submit",async(req, res)=>{
    const submitted = req.body.secret;
    
    try{
        const user = await User.findById(req.user.id);
        user.secret = submitted;
        user.save();
        res.redirect("/secrets");  
    } catch(err){
        console.log(err);
    }
})

//


app.listen(3000, ()=>{
    console.log("server started successfully");
})
