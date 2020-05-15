import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Song = ({letter}) => {

    if(letter.length === 0) return null;
    
    return(

    <Fragment>
        <h2>Letra Cancion</h2>
        <p>{letter}</p>
    </Fragment>
);

} 

Song.propTypes = {
    letter: PropTypes.string.isRequired
} 
export default Song;
