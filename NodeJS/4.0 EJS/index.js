import express from 'express';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    var day = new Date();
    if(day.getDay() >= 0 || day.getDay() < 5){
        res.render("index.ejs", {dayType: "workday", text: "get ready for the grind"});
    } else{
        res.render("index.ejs", {dayType: "weekend", text: "get ready for fun :D"});
    }
    
})

app.listen(port, ()=>{
    console.log("connected successfully");
})