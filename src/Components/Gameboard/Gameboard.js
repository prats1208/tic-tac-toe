import React, { useState } from "react";
import "./Gameboard.css";
const Gameboard = () => {
  const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState(initialGameboard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
       
        const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedGameBoard[rowIndex][colIndex]='X';
        return updatedGameBoard;
    });
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
