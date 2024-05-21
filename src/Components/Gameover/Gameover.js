import React from "react";
import "./Gameover.css";

const Gameover = ({winner, handleRematch}) => {
  return (
    <div id="game-over">
      <h2>Game Over !!</h2>
      {winner && <p>{winner} won the game!!!</p>}
      {!winner && <p>It's a draw!!!</p>}
      <p>
        <button onClick={handleRematch}>Rematch!</button>
      </p>
    </div>
  );
};

export default Gameover;
