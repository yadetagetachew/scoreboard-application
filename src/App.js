import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
  const [players, setPlayers] = useState([
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

  const [highScore, setHighScore] = useState()
  const nextPlayerId = useRef(14)

  useEffect(() => {
    const scores = players.map(player => player.score)
    setHighScore(Math.max(...scores));
  }, [players]);

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
      id: nextPlayerId.current ++
    }
  ]);
  // nextPlayerId.current += 1;
};

  return (
      <div className="scoreboard">
          <Header 
              // title="Trivia Score" 
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
                  isHighScore={player.score === highScore && highScore !== 0}
              />
          )}
          <AddPlayerForm addPlayer={handleAddPlayer}/>            
      </div>
  );
}

export default App;
