import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


// this is the method to mount the middleware, where the use is the mount method
// and bodyParser is the middleware
// and this line of code is the way to get access and control over the .body for the req parameter
// and using that you can handle the data that has been parsed by the user to the server :D
app.use(bodyParser.urlencoded({extended: true}))



app.post("/submit", (req, res) =>{
  console.log(req.body);
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
