// Replace the uri string with your connection string.
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitesDB");

// a method of validation
const fruitSchema = new mongoose.Schema({
  name: String, 
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "you didnt enter a name go again boi"]
  },
  review: String
});
// for creating relationships between collections in this
//you can pass a Schema as one of the arguments of the Schema like down bellow
const peopleSchema = new mongoose.Schema({
  name: String, 
  age: Number,
  favFruit: fruitSchema
});

const Fruit = mongoose.model("Fruits", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);
// for creating relationships between collections in this
//you can pass a Schema as one of the arguments of the Schema like down bellow


const fruit = new Fruit({
  name: "apple",
  rating: 7,
  review: "good"
});

const nar = new Fruit({
  name: "bomegrenade",
  rating: 10,
  review: "amazing"
})

const test2 = new Fruit({
  name: "mooz",
  rating: 10,
  review: "amazing"
})

const person = new Person({
  name: "akram",
  age: 24,
  favFruit: test2
})
person.save();

//test2.save();
// a way to insert many :D
//Fruit.insertMany([nar, test2]);
async function logger(){
  const data = await Fruit.find();
  mongoose.connection.close();
  data.forEach((fruit)=>{
    console.log(fruit._id);
  })

  
}

//logger();
// a method to update document
async function updater(){
const update = await Fruit.updateOne({name : "mooz"}, {review: "wonderful"});
console.log(update.modifiedCount);
mongoose.connection.close();
}
//updater(); 


//deleter
async function deleter(){
  const update = await Fruit.deleteOne({name : "mooz"});
  mongoose.connection.close();
  }
//deleter();
// person.save();