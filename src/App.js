import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
  const [players, setPlayers] = React.useState([
    {
        name:"Yadi",
        score:0,
        id:1
    },
    {
        name:"Gabby",
        score:0,
        id:2
    },
    {
        name:"Izzy",
        score:0,
        id:3
    },
    {
        name:"Taofeek",
        score:0,
        id:4
    },
    {
        name:"Jackie",
        score:0,
        id:5
    },

    {
        name:"Dustin",
        score:0,
        id:6
    },
    {
        name:"Ivan",
        score:0,
        id:7
    },
    {
      name:"Chris",
      score:0,
      id:8
    },
    {
      name:"Tsion",
      score:0,
      id:9
    },
    {
      name:"Moon",
      score:0,
      id:10
    },
    {
      name:"Trish",
      score:0,
      id:11
    },
    {
      name:"Eddie",
      score:0,
      id:12
    },
    {
      name:"Kendal",
      score:0,
      id:13
    }
  ]);
  const [nextPlayerId, setNextPlayerId] = useState(13);

  const handleRemovPlayer = (id) => {
      setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
      if(player.id === id) {
        return{
          name: player.name,
          score: player.score + delta,
          id: player.id
        }
      }
      return player;
    }));
}

const handleAddPlayer = (name) => {
  setPlayers(prevPlayers => [
    ...prevPlayers,
    {
      name,
      score: 0,
      id: nextPlayerId
    }
  ]);
  setNextPlayerId(prevId => prevId + 1);
};

  return (
      <div className="scoreboard">
          <Header 
              title="Trivia Score" 
              players={players} 
          />
          {players.map( player =>
              <Player 
                  name={player.name}
                  score={player.score}
                  id={player.id}
                  key={player.id.toString()}
                  removePlayer={handleRemovPlayer}
                  changeScore={handleScoreChange}
              />
          )}
          <AddPlayerForm addPlayer={handleAddPlayer}/>            
      </div>
  );
}

export default App;
