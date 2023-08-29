import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

//now just to know, middlewares are functions that get called before the responses of the server
// like .get/ .post/ .put and the other stuff
// now use(morgan) is a way to retrieve info of the client, and depending on the parameter
// passed to the morgan("parameter") it will specify how much info you will require
// usually this thing is used to define the response time of the server towards the client
// now this tool can be used also if there is no handler ( responses ) are specified
// it can calculate the response time for a mimic of the handler as if it existed
app.use(morgan("combined"))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
