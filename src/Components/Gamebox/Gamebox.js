import React,{useState} from "react";
import "./Gamebox.css";

const Gamebox = () => {
  const [player, setPlayer] = useState(true);
  const [mark, setMark] = useState("");
  const check = () => {
    if (player) {
      setMark("0");
    } else {
      setMark("X");
    }
    setPlayer((player) => !player);
  };
  return (
    <div className="board-box">
      <button onClick={check}>{mark}</button>
    </div>
  );
};

export default Gamebox;
