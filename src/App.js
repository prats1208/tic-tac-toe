import "./App.css";
import Gameboard from "./Components/Gameboard/Gameboard";
import Header from "./Components/Header/Header";
import Log from "./Components/Log/Log";
import Player from "./Components/Players/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const [gameTurns, setGameTurns] = useState([]);

  

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "0" : "X"
    );

    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].player == "X") {
        currentPlayer = "0";
      }
      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer},
        ...prevGameTurns,
      ];
    });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Yogs" symbol="X" isActive={activePlayer == "X"} />{" "}
            {/* in respective component, respective symbol will be activePlayer */}
            <Player name="Prats" symbol="0" isActive={activePlayer == "0"} />
          </ol>
          <Gameboard
            onSelectSquare={handleSelectSquare}
            gameTurns={gameTurns}
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
