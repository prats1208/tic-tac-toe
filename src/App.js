import './App.css';
import Gameboard from './Components/Gameboard/Gameboard';
import Header from './Components/Header/Header';
import Player from './Components/Players/Player';
import { useState } from 'react';

function App() {

  const [info,setInfo]=useState({name:'',symbol:''});
  return (
    <div className="App">
      <Header/>
      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name="Yogs" symbol="0" setInfo={setInfo}/>
            <Player name="Prats" symbol="X" setInfo={setInfo}/>
          </ol>
          <Gameboard/>
        </div>
        
      </main>
    </div>
  );
}

export default App;
