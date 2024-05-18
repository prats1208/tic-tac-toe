import "./App.css";
import Gameboard from "./Components/Gameboard/Gameboard";
import Header from "./Components/Header/Header";
import Log from "./Components/Log/Log";
import Player from "./Components/Players/Player";
import { useState } from "react";

function App() {

  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "0" : "X"
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player name="Yogs" symbol="X" isActive={activePlayer=='X'}/> {/* in respective component, respective symbol will be activePlayer */}
            <Player name="Prats" symbol="0" isActive={activePlayer=='0'}/>
          </ol>
          <Gameboard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} />
        </div>
      </main>
      <Log/>
    </div>
  );
}

export default App;
