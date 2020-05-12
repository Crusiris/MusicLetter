import React from 'react'

const Form = () => {
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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
                                        />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                   <div className="form-group">
                                            <label>Canciones</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre de cancion"
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