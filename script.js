"use strict";
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.score--1');

const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');
const btnNew = document.querySelector('.btn--new');
const cont = document.querySelector('.btn--cont');
const moveEl0 = document.querySelector(".moveDisplay--0");
const moveEl1 = document.querySelector(".moveDisplay--1");
const name0 = document.querySelector(".name--0");
const name1 = document.querySelector(".name--1");
// console.log(player0El.textContent);
// console.log(player1El.textContent);
// console.log(score0El + 2);
// console.log(score1El+ 2);

const badGuys =  [
    {ref: 1,
    charName: "Skelator",
    playStyle: [],
    winRound: "Victory is getting closer, I can smell it",
    looseRound: "Your luck is running out loser!",
    winGame: "You never stood a chance!!",
    loseGame: "Luck is often with the unskilled",
    },

    {ref: 2,
    charName: "Pokachica",
    playStyle: [],
    winRound: "Victory is getting closer, I can smell it",
    looseRound: "Your luck is running out loser!",
    winGame: "You never stood a chance!!",
    loseGame: "Luck is often with the unskilled",
    },

    {ref: 3,
    charName: "Joker",
    playStyle: [],
    winRound: "Victory is getting closer, I can smell it",
    looseRound: "Your luck is running out loser!",
    winGame: "You never stood a chance!!",
    loseGame: "Luck is often with the unskilled",
    },

    {ref: 4,
    charName: "Sauron",
    playStyle: [],
    winRound: "Victory is getting closer, I can smell it",
    looseRound: "Your luck is running out loser!",
    winGame: "You never stood a chance!!",
    loseGame: "Luck is often with the unskilled",
}
]


const randomSelector = function(num1=3, num2=0){
    return Math.floor(Math.random() * num1 +1) + num2;
}
// console.log(randomSelector(6));
// console.log(randomSelector());

// console.log(randomSelector((badGuys.length), -1));
// console.log(opponent);


// game function pass in a move from each player returns string to trigger
// next part of engine
const game = function (move0, move1) {
    if (move0 === move1) {
        return "draw"
    } else if ((move0 === "rock" && move1 === "scissors")
    || (move0 ==="paper" && move1 === "rock")
    || (move0 === "scissors" && move1 ==="paper")) {
        return "win0"
    } else {
        return "win1"
    }
};
// //FUNCTION to return players move on clicking of game butto
const playerMove = function () {
    if (btnRock.addEventListener("click", function(){
        return "rock"}));
    if (btnPaper.addEventListener("click", function(){
        return "paper"}))
    if (btnScissors.addEventListener("click", function(){
        return "scissors"}));
};

// let foo = playerMove()
// console.log(foo)

//TEST  for game funtion
// console.log(game("rock", "paper"));
// console.log(game("paper", "rock"));
// console.log(game("paper", "paper"));
// console.log(game("scissors", "paper"));

const numberToMoveConvertor = function(int) {
    console.log(int)
    if (int == 1) {
        return "rock"
    } else if (int == 2) {
        return "paper"
    } else {
        return "scissors"
    }
};
// console.log(numberToMoveConvertor(randomSelector()));

// will need to seperate out as random selector will need to do more than just pass into this function
// name functions to pass into this in while loop
// let result = game(Eventlistner(click,(), randomSelector())


//function to place silver border round winner
const winBorder = function(plr) {
    plr.classList.add("player0Win")
};
// winBorder(player0El);
// player0El.classList.add("player0Win");

const init = function() {
    score0El.textContent="0";
    score1El.textContent="0";

    moveEl0.classList.add("hidden");
    moveEl1.classList.add("hidden");

    name0.textContent= player;
    name1.textContent= opponentName;
    
}


//delay func
// function task(i) {
//         setTimeout(function() {
//             // Add tasks to do
//         }, 2000 * i);
//       }
// jpeg changer
const gameIcon = function(move0, move1) {
    moveEl0.classList.add("hidden");
    moveEl1.classList.add("hidden");
    moveEl0.src = `./images/neon_${move0}.jpeg`
    moveEl1.src = `./images/neon_${move1}.jpeg`
}

// btnRock.addEventListener("click", function(){
// playerMove = "rock"});
// if (btnPaper.addEventListener("click", function(){
//     playerMove = "paper"}));
// if (btnScissors.addEventListener("click", function(){
//     playerMove = "scissors"}));

let player = prompt("Enter Your name:");
if (!player){player = "Player 1"};
let score0 = 0;
let score1 = 0;
const opponent = badGuys[(randomSelector((badGuys.length), -1))];
const opponentName= opponent.charName
console.log(opponent.winRound, opponentName)
let opponentMove, result, playerMove1


init()


//GAME LOOP
while (score0 < 1 && score1 < 1) {  
    // playerMove = numberToMoveConvertor(randomSelector())
    // playerMove = "rock"
    const playerMove1 = playerMove()
    console.log(playerMove1)
    opponentMove = numberToMoveConvertor(randomSelector());
    gameIcon(playerMove1, opponentMove);
    console.log(playerMove1, opponentMove);
    result = game(playerMove1, opponentMove);
    console.log(result);
    if (result === "win0"){
        score0 += 1} else if (result === "win1") {
        score1 += 1
    };
    console.log(score0, score1);
}