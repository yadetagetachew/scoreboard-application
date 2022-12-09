import React, {memo} from 'react';
import PropTypes from 'prop-types'
import Counter from './Counter';
import Icon from './Icon';


const Player = ({score, id, changeScore, removePlayer, name, isHighScore}) => {
    return(
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
            <Icon isHighScore={isHighScore}/>
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
    return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
  }

  Player.propTypes = {
    score: PropTypes.number.isRequired ,
    id: PropTypes.number.isRequired ,
    removePlayer: PropTypes.func.isRequired ,
    name: PropTypes.string.isRequired ,
    isHighScore: PropTypes.bool.isRequired
  };

export default memo(Player, playerPropsAreEqual)