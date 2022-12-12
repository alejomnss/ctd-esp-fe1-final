import React, { FC } from 'react';
import Episodio from '../../types/episodio.types';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @param {string} episodio
 * @returns {React.ReactElement}un JSX element 
 */
const TarjetaEpisodio: FC<{ episodio: Episodio }> = ({ episodio }) => {

    return (
        < div className="tarjeta-episodio" >
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episodio}</span>
                <span>Lanzado el: {episodio.air_date}</span>
            </div>
        </div>
    );
};

export default TarjetaEpisodio;