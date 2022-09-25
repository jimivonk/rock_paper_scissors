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

console.log(player0El.textContent);
console.log(player1El.textContent);
console.log(score0El + 2);
console.log(score1El+ 2);

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
    charName: "Jackman",
    playStyle: [],
    winRound: "Victory is getting closer, I can smell it",
    looseRound: "Your luck is running out loser!",
    winGame: "You never stood a chance!!",
    loseGame: "Luck is often with the unskilled",
    },

    {ref: 4,
    charName: "Space Guy",
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

const opponent = badGuys[(randomSelector((badGuys.length -1), 0))].charName;
console.log(randomSelector((badGuys.length), 0));
console.log(opponent);

