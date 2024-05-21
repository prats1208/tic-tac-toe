import React from "react";
import "./Log.css";

const Log = ({ gameTurn }) => {
  return (
    <div id="log">
      <li>
        {gameTurn.player} clicked on square box {gameTurn.square.row}-
        {gameTurn.square.col}
      </li>
    </div>
  );
};

export default Log;
