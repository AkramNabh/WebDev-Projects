randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 5);
randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 5);
console.log(randomNumber1);
pictures = ["./images/dice1.png", "./images/dice2.png",
"./images/dice3.png", "./images/dice4.png", 
"./images/dice5.png", "./images/dice6.png"];
document.querySelector(".img1").setAttribute("src", pictures[randomNumber1]);
document.querySelector(".img2").setAttribute("src", pictures[randomNumber2]);
if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent = "player 1 wins";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "player 2 wins";
} else {
    document.querySelector("h1").textContent = "Draw";
}