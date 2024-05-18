import React, { useState } from "react";
import "./Gameboard.css";

const Gameboard = ({ onSelectSquare, gameTurns }) => {
  // game board data structure
  const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // const [gameBoard, setGameBoard] = useState(initialGameboard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     //immutable way of updating state
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = activePlayer;
  //     return updatedGameBoard;
  //   });

  //   onSelectSquare();
  // }
  
  let gameBoard = initialGameboard;
 
  for (const gameTurn of gameTurns) {
    const { square, player } = gameTurn; //destructurig
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => {onSelectSquare(rowIndex, colIndex);}} >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboard;
