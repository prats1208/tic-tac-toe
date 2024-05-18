import React from 'react'

const Log = ({gameTurn}) => {
  console.log(gameTurn.player);
  return (
    <li>
      {gameTurn.player} clicked on square box {gameTurn.square.row}-{gameTurn.square.col}
    </li>
  )
}

export default Log