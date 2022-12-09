import React from 'react';
import PropTypes from 'prop-types'
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({players, title}) => {
    // you can list your props in an object like above
    // insted of using a const like below
    // const {players, title} = props
    return (
        <header>
        <Stats 
            // players={props.players}
            players={players}
        />
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
  }
  Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
  };

  export default Header