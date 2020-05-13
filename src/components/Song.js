import React, {Fragment} from 'react'

const Song = ({letter}) => {

    if(letter.length === 0) return null;
    
    return(

    <Fragment>
        <h2>Letra Cancion</h2>
        <p>{letter}</p>
    </Fragment>
);

} 
 
export default Song;
