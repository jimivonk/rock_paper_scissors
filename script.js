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
    winRound: `"I help no one but myself!"`,
    looseRound: `"How unpleasant it is to see you, you sniveling coward!"`,
    drawRound: `"I must possess all, or I possess nothing."`,
    winGame: `"You never stood a chance!!"`,
    loseGame: `"I am the Alpha and the Omega. Death and rebirth. 
                And, as I die, so will I be reborn."`,
    },

    {ref: 2,
    charName: "Pokachica",
    playStyle: [],
    winRound: `"Victory is getting closer, I can smell it"`,
    looseRound: `"A stopped clock is right twice a day."`,
    drawRound: `"I must possess all, or I possess nothing."`,
    winGame: `"You never stood a chance!!"`,
    loseGame: `"Luck is often with the unskilled."`,
    },

    {ref: 3,
    charName: "Joker",
    playStyle: [],
    winRound: `"Does it depress you to know just how alone you really are?"`,
    looseRound: `"I believe, whatever doesn’t kill you, simply makes you…stranger."`,
    drawRound: `"As you know, madness is like gravity: All it takes is a little push."`,
    winGame: `"You never stood a chance!!"`,
    loseGame: `"You’re harder to kill than a cockroach on steroids!"`,
    },

    {ref: 4,
    charName: "Sauron",
    playStyle: [],
    winRound: `"Give in now and I may keep you as a pet"`,
    looseRound: `"Insulence!"`,
    drawRound: `"I'm going to feed you to my Nazgul"`,
    winGame: `"You are bent to my will!!"`,
    loseGame: `"I will be avenged!!"`,
}
]


//random move/ player selector
const randomSelector = function(num1=3, num2=0){
    return Math.floor(Math.random() * num1 +1) + num2;
};

// coverts number into a move string. Used with randomSelectoe
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

// game function pass in a move from each player returns string to trigger
// next part of engine
const game = function (move0, move1) {
    if (move0 === move1) {
        return "draw"
    } else if ((move0 === "rock" && move1 === "scissors")
    || (move0 ==="paper" && move1 === "rock")
    || (move0 === "scissors" && move1 ==="paper")) {
        return "0"
    } else {
        return "1"
    }
};

// display the hand corresponding to player move
const gameIcon = function(move0, move1) {
    moveEl0.classList.remove("hidden");
    moveEl1.classList.remove("hidden");
    moveEl0.src = `./images/neon_${move0}.jpeg`
    moveEl1.src = `./images/neon_${move1}.jpeg`
};


//Player name entry
let player = prompt("Enter Your name:");
if (!player){player = "Player 1"};
let playerGender = prompt("Are you male or female?(m/f)");
//Sets initial score to 0
let score0 = 0;
let score1 = 0;
//Assigns variable to the randomly selected opponent object
const opponent = badGuys[(randomSelector((badGuys.length), -1))];
//Assigns variable to opponents name
const opponentName= opponent.charName;
let gameStatus = false;
var gameArray = [];
let opponentMove, result, playerMove1;

//function to select player avatar
const playerPicture = function(gen) {
    if (gen === "m" || "M" || "male") {
        document.querySelector(".avatar--0").src=`./images/male.png`;
    } else if (gen === "f" || "F" || "female") {
        document.querySelector(".avatar--0").src=`./images/female.png`;
    } else {
        document.querySelector(".avatar--0").src=`./images/neutral.png`;
    };
}

playerPicture(playerGender)

//Game initial status
const init = function() {
    gameStatus = true;

    document.querySelector(".avatar--1").src=`./images/${opponentName}.png`

    score0 = 0;
    score1 = 0;
    score0El.textContent="0";
    score1El.textContent="0";

    moveEl0.classList.add("hidden");
    moveEl1.classList.add("hidden");

    name0.textContent= player;
    name1.textContent= opponentName;
};

init()


// DOM manipulation between rounds for functions that require round result
const screenRoundUpdate = function (res) {
    //Removes hidden from chatBox
    document.querySelector(".chatBox").classList.remove("hidden");
    //Draw DOM removal of win borders and displays draw quote
    if (res === "draw") {
        document.querySelector('.player--0').classList.remove(`player0Win`);
        document.querySelector('.player--1').classList.remove(`player1Win`);
        document.querySelector(".chatBox").textContent = `${opponent.drawRound}`;
        return [];
    };
    //Score update and winner borders
    const winnerScore = document.querySelector(`.score--${res}`);
    winnerScore.textContent = gameArray[res];
    document.querySelector('.player--0').classList.remove(`player0Win`);
    document.querySelector('.player--1').classList.remove(`player1Win`);
    document.querySelector(`.player--${res}`).classList.add(`player${res}Win`);
    //Win and lose quote display
    if (res === "1"){
        document.querySelector(".chatBox").textContent = `${opponent.winRound}`;
    } else if (res === "0") {
        document.querySelector(".chatBox").textContent = `${opponent.looseRound}`;
    };
    
     // winnerScore.textContent = "hello World";
    // console.log(gameArray);
    // console.log(`this is the result of : ${gameArray[res]}`);
    //  winBorder(`player${res}El`, res);
}
//checks if game end conditions have been reached, ensures required results are displayed, 
//hidden buttons appear and game buttons dissapear
const gameEnd=  function(sc1, sc2, games = 5) {
    if (sc1 === games) {
        gameStatus = false
        document.querySelector('.playGame').classList.add(`hidden`);
        document.querySelector('.gameEnd').classList.remove(`hidden`);
        document.querySelector(".chatBox").textContent = `${opponent.loseGame}`;
        document.querySelector(`.player--0`).classList.add(`gameWin`);
        moveEl0.classList.add("hidden");
        moveEl1.classList.add("hidden");
    };

    if(sc2 === games) {
        document.querySelector('.playGame').classList.add(`hidden`);
        document.querySelector('.gameEnd').classList.remove(`hidden`);
        document.querySelector(".chatBox").textContent = `${opponent.winGame}`;
        document.querySelector(`.player--1`).classList.add(`gameWin`);
        moveEl0.classList.add("hidden");
        moveEl1.classList.add("hidden");
    };
};


//Main game loop
const gameLoop = function (playerMove) {
    opponentMove = numberToMoveConvertor(randomSelector());
    gameIcon(playerMove, opponentMove);
    result = game(playerMove, opponentMove);
    if (result === "0"){
        score0 += 1} else if (result === "1") {
        score1 += 1
    };
    gameArray = [];
    gameArray.push(score0, score1, result);
    screenRoundUpdate(result);
    gameEnd(score0, score1)

};

// // console.log(score0, score1);
// console.log(gameArray);
// 


if (gameStatus) {
    btnRock.addEventListener("click", function() {
        gameLoop("rock")});
    btnPaper.addEventListener("click", function() {
        gameLoop("paper")
    });
    btnScissors.addEventListener("click", function() {
        gameLoop("scissors")
        });
    };
if (!gameStatus) {
    document.querySelector("btn--newGame").addEventListener("click", init)
}