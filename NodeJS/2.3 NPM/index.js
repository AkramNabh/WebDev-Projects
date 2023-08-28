import generateName from "sillyname";
import superheroes from "superheroes";
var sillyname = generateName();
var randomsuperheroname = superheroes.random();
var allnames = superheroes.all;
console.log(`my name is ${randomsuperheroname}, this is exactly like fstrings in python which is nice for debugging`);
console.log(allnames);