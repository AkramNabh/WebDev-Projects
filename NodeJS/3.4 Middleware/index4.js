import express from "express";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit", (req, res) =>{
  console.log(req.body)
  res.send("<h1>your band name is :</h1> <p>" + req.body.street + req.body.pet + "</p>");
  res
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
