import express from 'express';
import bodyParser from 'body-parser';
import { render } from 'ejs';
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res)=>{
res.render("index.ejs");
});

app.post("/submit",(req, res)=>{
    //req.body.name is the way to retrieve data from it.
    res.render("index.ejs",{
        task: req.body["TheTask"],
        title: req.body["TheTitle"]
    });
    console.log(req.body["TheTask"]);
})


app.listen(port, ()=>{
    console.log(`connected to ${port} successfully`);
});