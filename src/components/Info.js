import React from 'react'

const Info = ({ infoArtist }) => {
    if (Object.keys(infoArtist).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyEN, strTwitter, strFacebook,strLastFMChart, 
        strArtist } =  infoArtist;
    return ( 
        <div className="card border-light">
            <div  className="card-header bg-primary text-light font-weight-bold">
                    Información del Artista {strArtist}
            </div>
            <div className="card-body">
                <img src={ strArtistThumb } alt="Logo Artista"/>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía: </h2>
                <p className="card-text">{strBiographyEN}</p>
            </div>
            <div className="card-body">
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
            </div>
        </div>
     );
}
 
export default Info;