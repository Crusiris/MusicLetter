import React, { useState } from 'react'

const Form = () => {

    //Estado para la busqueda
    const [ search, saveSearch ] = useState({
        artista:'',
        cancion:''
    });

    //Estado para errores

    const [ error, saveError ]= useState(false);

    //Destructuring
    const { artista, cancion } = search;

    //Funcion para obtener el contenido de  los input
    const updateState = e =>{
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    //Peticion get
    const getInfo = e =>{
        e.preventDefault();

        if( artista.trim() === '' || cancion.trim() === '' ){
            saveError(true)
            return;
        }
        saveError(true);
        
    }
    
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                        onSubmit={getInfo}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscardor letras de Canciones

                            <div className="row">
                                <div className="col-md-6">

                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre de artista"
                                        onChange={ updateState }
                                        value={artista}
                                       />
                                    </div>

                                </div>
                                <div className="col-md-6">

                                   <div className="form-group">
                                            <label>Canciones</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de cancion"
                                            onChange={ updateState }
                                            value={cancion}
                                           />
                                    </div>
                                </div>
                                
                            </div>

                            </legend>

                            <button
                            type="submit"
                            className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Form;