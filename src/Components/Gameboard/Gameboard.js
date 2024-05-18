import React, { useState } from "react";
import "./Gameboard.css";


const Gameboard = ({onSelectSquare,activePlayer}) => {

  // game board data structure
  const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
       //immutable way of updating state
        const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
        updatedGameBoard[rowIndex][colIndex]=activePlayer;
        return updatedGameBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;
