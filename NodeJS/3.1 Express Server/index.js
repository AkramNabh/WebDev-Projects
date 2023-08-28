import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("hello world");
})


//app.listen(server number (port), function with () => {} as a simplify)
app.listen(port, () =>{
    console.log(`console running on port ${port}.`);
})