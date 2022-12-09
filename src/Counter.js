import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({score, id, changeScore}) => {
    // const id = props.id
    return(
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => changeScore(id, 1)} > + </button>
        </div>
    );  
  };
  
  Counter.propTypes = {
    score: PropTypes.number,
    id: PropTypes.number,
    changeScore:PropTypes.func
  };

  export default Counter