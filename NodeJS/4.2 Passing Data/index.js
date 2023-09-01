import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let fname = req.body["fName"];
  let lname = req.body["lName"];
  let num = lname.length + fname.length;
  res.render("index.ejs",{Number: num});


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
