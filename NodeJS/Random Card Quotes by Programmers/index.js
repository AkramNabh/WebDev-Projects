import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// declaring the static data file to be used in the project
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let responses = []; // Store responses in an array
let currentIndex = -1; // Track the current response index
app.get("/", async (req, res) =>{
  try{
    const response = await axios.get("https://programming-quotesapi.vercel.app/api/random");
      const result = JSON.stringify(response.data);
      console.log(response.data.author);
      responses.push(response.data);
      currentIndex = responses.length - 1;
      res.render("index.ejs", {
        author : response.data.author,
        quote : response.data.quote, 
      });
  } catch(error){
    console.error('Error fetching data:', error.message);
  }

})

  app.get("/Next", async(req, res)=>{
  try{
  
    const response = await axios.get("https://programming-quotesapi.vercel.app/api/random");
    responses.push(response.data);
    currentIndex = responses.length - 1;
    res.render("index.ejs", {
      author : response.data.author,
      quote : response.data.quote, 
    });
  } catch(error){
    console.error('Error fetching data:', error.message);
  }
})

app.get("/Back", async(req, res)=>{
  if (currentIndex > 0) {
    currentIndex--; // Decrement the current index to get the older data
    const olderData = responses[currentIndex];

    res.render("index.ejs", {
      author: olderData.author,
      quote: olderData.quote,
    });
  } else {
    // No older data available
    res.render("index.ejs", {
      author: null,
      quote: null,
      older: null,
    })
  }
})

app.listen(port, ()=>{
    console.log(`connected to port ${port} successfully`);
})