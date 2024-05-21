import React, { useState } from "react";
import "./Player.css";

const Player = ({ name, symbol, isActive,onChangeName }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditable, setIsEditable] = useState(false);

function handleClick(){
  setIsEditable((isEditable) => !isEditable);
  if(isEditable){
    onChangeName(symbol,playerName);
  }
}

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditable ? (
            <input
              type="text"
              required
              placeholder={playerName}
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button
          className="btn"
          onClick={handleClick}>
          {isEditable ? "Save" : "Edit"}
        </button>
      </li>
    </>
  );
};

export default Player;
