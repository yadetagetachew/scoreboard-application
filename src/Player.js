import React, {memo} from 'react';
import PropTypes from 'prop-types'
import Counter from './Counter';


const Player = ({score, id, changeScore, removePlayer, name}) => {
    return(
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
                {name}
            </span>
            <Counter 
            score={score}
            id={id}
            changeScore={changeScore}
            />
        </div>
        
    );
  }

  const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score;
  }

  Player.propTypes = {
    score: PropTypes.number ,
    id: PropTypes.number ,
    removePlayer: PropTypes.func ,
    name: PropTypes.string
  };

export default memo(Player, playerPropsAreEqual)