import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("method is ", req.method);
  console.log("url is ", req.url);
  next();
}



app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
