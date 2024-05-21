import "./App.css";
import Gameboard from "./Components/Gameboard/Gameboard";
import Header from "./Components/Header/Header";
import Log from "./Components/Log/Log";
import Player from "./Components/Players/Player";
import { useState } from "react";
import {winningSet} from './Components/winningSet';
import Gameover from "./Components/Gameover/Gameover";

//gameboard

// game board data structure
 const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function createGameBoard(gameTurns){
  //creating deep copy so that react able to understand the change in array and re-render
  let gameBoard = [...initialGameboard.map(innerArray=>[...innerArray])];
 
  for (const gameTurn of gameTurns) { //for loop execute only when there is any data
    const { square, player } = gameTurn; //destructuring
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}


//helper function to get current activeplayer 
function derivedActivePlayer(Turns) {
  let currentPlayer = "X";
  if (Turns.length > 0 && Turns[0].player == "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

//gameover function
function gameOver(gameBoard,players){
  let winner;
  //iterating over each combination and getting symbol fron gameboard w.r.t combination & if matches,its a win
  for (const combination of winningSet){
    const firstBoxSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondBoxSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdBoxSymbol = gameBoard[combination[2].row][combination[2].col];
    
    if(firstBoxSymbol && firstBoxSymbol==secondBoxSymbol && firstBoxSymbol == thirdBoxSymbol){
      winner = players[firstBoxSymbol];
    }
  }
  
  return winner;
}

function App() {

  //getting playername and assigning dynamically
  const[players,setPlayers]=useState({
    "X":"Player 1",
    "O":"Player 2"
  });

  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  //gameboard created and updated on each re-render
  const gameBoard = createGameBoard(gameTurns);
  
  //this gets re-calculated on every render(as every state change cause re-render and whole comp fun re-executed)
  const activePlayer = derivedActivePlayer(gameTurns);

  //checking if game is over - return winner or draw
  const winner = gameOver(gameBoard,players);
  const hasDraw = gameTurns.length==9 && !winner;

  //on selecting square/marking symbol function
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((prevActivePlayer) =>
    //   prevActivePlayer === "X" ? "0" : "X"
    // );
    //computed activeplayer using gameturns
    

    setGameTurns((prevGameTurns) => {

      const currentPlayer = derivedActivePlayer(prevGameTurns);

      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];
    });
  }

  //Restart based on gameturns
  function handleRematch(){
    setGameTurns([]);
  }

  //player dynamically assign
  function handlePlayerNameChange(symbol,newName){
    setPlayers((prevPlayers)=>{
      return{
        ...players,
        [symbol]:newName
      };
    })
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={players.X}
              symbol="X"
              isActive={activePlayer == "X"}
              onChangeName ={handlePlayerNameChange}
            />
            {/* in respective component, respective symbol will be activePlayer - isActive={activePlayer == "X"} */}
            <Player
              name={players.O}
              symbol="O"
              isActive={activePlayer == "O"}
              onChangeName ={handlePlayerNameChange}
            />
          </ol>
          {( winner || hasDraw ) && <Gameover winner={winner} handleRematch={handleRematch}/>}
          <Gameboard
            onSelectSquare={handleSelectSquare}
            gameBoard={gameBoard}
          />
        </div>
      </main>
      <ol>
        {gameTurns.map((g) => (
          <Log gameTurn={g} />
        ))}
      </ol>
    </div>
  );
}

export default App;
