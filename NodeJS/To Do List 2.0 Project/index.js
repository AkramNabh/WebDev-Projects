import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// functions over here
async function Deleter(title){
    try{
        const update = await TDL.deleteOne({title: title});
        mongoose.connection.close();    
    }catch (error) {
        // Handle the error here, you can log it or return an error response.
        console.error('Error in Retriever:', error);
        throw error; // Re-throw the error to propagate it up the call stack if needed.
      }
}



mongoose.connect("mongodb://localhost:27017/TDLinfo");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const TDLSchema = new mongoose.Schema({
    title: String,
    info: String
  });

  const TDL = mongoose.model("TDLinfo", TDLSchema);


app.get("/",async (req, res)=>{
    const data = await TDL.find();
res.render("index.ejs",{
    data: data
});
});

app.post("/submit", async (req, res)=>{
    //req.body.name is the way to retrieve data from it.
    const tdl = new TDL({
        title: req.body.title,
        info: req.body.info
    })
    tdl.save();
    

    const data = await TDL.find();

    res.render("index.ejs",{
        data: data
    });
   // mongoose.connection.close();
    console.log(req.body.title);
})

app.post("/delete",async (req, res)=>{
    console.log(req.body);
    const update = await TDL.deleteOne({_id: req.body._id});
    const data = await TDL.find();
    res.render("index.ejs",{
        data: data
    });
    
})
app.listen(port, ()=>{
    console.log(`connected to ${port} successfully`);
});