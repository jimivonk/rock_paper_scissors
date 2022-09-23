Create a webapp playing Rock Paper Scissors.
Features:
## IN GAME
Playing vs computer, random computer choice
different computer characters, **who are weighted to play more towards certain styles(last)
4 computer characters with avatars and "personalities" and theme music
MODES
    *first make random selection
    *develop game mode with text story line as you pass ordered to play the boss
 



<HTML>
#pre-match pop-up
CONTAINER with .hidden
name
player avatars
contestant select (with random option)
continue button

#game display
player name
opponent name
current game score
warrior avatars
hand animations
music
opponents speech box

#buttons
1)rock
2)paper
3)scissors
4)play again
5)continue


*************************************************************************
<CSS>

#pre-match pop-up
CONTAINER with .hidden
name
player avatars. .avatarSelector blue border when hovering green border when selected
contestant select (with random option) .avatarSelector
continue button . event listener, click checks if 

#game display
player name .names
opponent name ,names
current game score .scores
warrior avatars .avatar
hand animations .move
music
opponents speech box

#buttons
1)rock
2)paper
3)scissors
4)play again
5)continue

. {
}
#layout
left right layout, player on the left, opponent on the right
avatars upper left and upper right

#classes
create .hidden elements to be called in and out depending how the game stataus





**************************************************************************
<Javascript>
#pre-match pop-up
CONTAINER with .hidden
name
player avatars. .avatarSelector blue border when hovering green border when selected
contestant select (with random option) .avatarSelector
continue button . event listener, click, passes default values if undefined, otherwise passes information into the 
    the game screen and game programme

#game display
player name - default player 1 or entered user name, .textcontent
opponent name  .textContent
current game score .value
You win/lose/draw  .hidden  CLASSES: .win green, .draw blue, .lose red, all large cool font, vibrent colors
warrior avatars  .hidden activated when selected at start of the game
hand animations .hidden activated when selecte by player and computer
music   FIGURE OUT
opponents speech box .hidden .textContent

#buttons
-eventListener click, every click sets the game mechanic in motion. the program runs and the charName randomly selects
move. 
- .hands img pops onto screen visualing demonstrating move
- .value changesscore if  not a draw
- .hidden reveals 

1)rock
2)paper
3)scissors


4)play again

#game functionality
-if else if
-boolean true p1 wins and gains point, false, p2 wins and gains point
-draw try return function again OR continue OR a trigger value to replay round without altering anything
- play to 10


#DOM elements
avatar selection choice displays character in display
while game is underway 

build character database:
    *strings to say with victory or defeat
    *random comments to say depending on how the round went
    *playstyle: array or object to pass into function to modify playstyle


#Char database
ID: int
charName: str 
winRoundResonse: str    //next stage => [str, str, str]
looseRoundResonse: str    //next stage => [str, str, str]
winGameResonse: str    //next stage => [str, str, str]
loseGameResonse:str    //next stage => [str, str, str]
playStyle: [] || {} //create

#create game through functions: 
1)Build one character, with one thing to say for each event.
2) build game as a series of functions that works entirely through database
3)Expang game by building more in game char responses, create function to randomly select something depending on
game condition. This should be called on automatically by the game condition.
4) expand game further by building different character databases.
5) Character is chosen by player at beginning. only this part of the code should change. Each character should now work seamlessly.

start with "const char = arr[0].charName"





