"use strict";
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const btnRock = document.querySelector('.btn--rock');
const btnPaper = document.querySelector('.btn--paper');
const btnScissors = document.querySelector('.btn--scissors');
const btnNew = document.querySelector('.btn--new');
const cont = document.querySelector('.btn--cont')

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

const randomSelector = function(num1=3, num2=1){
    return Math.floor(Math.random() * num1 +1) + num2;
}
console.log(randomSelector(6));
console.log(randomSelector());

const opponent = badGuys[(randomSelector((badGuys.length -1), -1))].charName;
console.log(randomSelector((badGuys.length), -1));
console.log(opponent);

const player = "player"

// game function pass in a move from each player returns string to trigger
// next part of engine
const game = function (move1, move2) {
    if (move1 === move2) {
        return "draw"
    } else if ((move1 === "rock" && move2 === "scissors")
    || (move1 ==="paper" && move2 === "rock")
    || (move1 === "scissors" && move2 ==="paper")) {
        return "winPlayer1"
    } else {
        return "winPlayer2"
    }
}

console.log(game("rock", "paper"));
console.log(game("paper", "rock"));
console.log(game("paper", "paper"));
console.log(game("scissors", "paper"));




// will need to seperate out as random selector will need to do more than just pass into this function
// name functions to pass into this in while loop
// let result = game(Eventlistner(click,(), randomSelector())


//function to place silver border round winner
const winBorder = function(plr) {
    plr.classList.add("player0Win")
};

// winBorder(player0El);

// player0El.classList.add("player0Win");