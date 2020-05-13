import React, {Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import axios from 'axios';


function App() {

  //Estado manejar la letra que se busca
    const [ searchLetter, saveSearchLetter ] = useState({});
  //Estado para manejar las letras obtenidas
    const [ letter, saveLetter ] = useState('');

    useEffect(( )=> {
      if( Object.keys(searchLetter).length === 0)return;

      //Funcion asincrona que hace la peticion al API 
      const getApiLetter = async ()=>{
        const { artista, cancion } = searchLetter;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const result = await axios(url);
        saveLetter(result.data.lyrics);
      
      }

      getApiLetter();
    },[searchLetter]);

  return (
    <Fragment>
        <Form
        saveSearchLetter = { saveSearchLetter }
        />

        <div className="container mt-5">
          <div className="row">
              <div className="col-md-6">

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
