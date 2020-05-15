import React, {Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import axios from 'axios';



function App() {

  //Estado manejar la letra que se busca
    const [ searchLetter, saveSearchLetter ] = useState({});
  //Estado para manejar las letras obtenidas
    const [ letter, saveLetter ] = useState('');
  //Estado para manejar la info del artista
    const [ infoArtist, saveInfoArtist ] = useState({})

    useEffect(( )=> {
      if( Object.keys(searchLetter).length === 0)return;

      //Funcion asincrona que hace la peticion al API 
      const getApiLetter = async ()=>{
        const { artista, cancion } = searchLetter;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

        //Peticion get a ambas API, Con promise all
        const [letter, infoLetter] = await Promise.all([
          axios(url),
          axios(url2)
        ]);
      
        saveLetter(letter.data.lyrics);
        saveInfoArtist(infoLetter.data.artists[0]);
      
      }

      getApiLetter();
    },[searchLetter, infoArtist]);

  return (
    <Fragment>
        <Form
        saveSearchLetter = { saveSearchLetter }
        />

        <div className="container mt-5">
          <div className="row">
              <div className="col-md-6">
                  <Info
                  infoArtist={infoArtist}
                  />
              </div>
              <div className="col-md-6">
                  <Song
                   letter={ letter }
                  />
              </div>
          </div>
        </div>
    </Fragment>
   
  );
}

export default App;
