import express from 'express';
const app = express();
const port = 3000;



// so basically what is going on over here
// using .get, takes 2 parameters, one that is the location on the server
// second is a function with 2 parameters, req and res
// res can send and edit on the page that is loaded in the server, where you can use it to load 
// or edit HTML and other fun stuff
// and req still didnt find a direct usage of it, but it can show all the info of the server

app.get("/", (req, res) =>{
    res.send("<h1>you good man???<h1>");
    console.log(req.rawHeaders);
});
app.get("/contact", (req, res) =>{
    res.send("<h1>no number for stranger<h1>");
    console.log(req.rawHeaders);
});
app.get("/about", (req, res) =>{
    res.send("<h1>you aint knowing shit about me<h1>");
    console.log(req.rawHeaders);
});



// a listener, this boy is the engine of activating the server, basically what it does
// .listen has 2 parameters, first one will be the desired port and the second is for 
// a function that will be called on a sucessful connection.
app.listen(port, () =>{
    console.log("3000 is working good");
})