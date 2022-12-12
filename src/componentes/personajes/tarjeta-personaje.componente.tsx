import { FC } from 'react';
import BotonFavorito from '../botones/boton-favorito.componente';
import Personaje from "../../types/personaje.types"
import './tarjeta-personaje.css';
import { useNavigate } from 'react-router-dom';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * @param {Personaje} personaje
 * @returns un JSX element 
 */

const TarjetaPersonaje: FC<{ personaje: Personaje }> = ({ personaje }) => {
    
    let navegador = useNavigate();

    const redirigirPaginaDetalle = () => {
        navegador(`/detail/${personaje.id}`, { state: { personaje: personaje } })
    };

    return (
        <div className="tarjeta-personaje">
            <img src={personaje.image} onClick={redirigirPaginaDetalle} alt={ personaje.name}/>
            <div className="tarjeta-personaje-body">
                <span>{personaje.name}</span>
                <BotonFavorito esFavorito={false} />
            </div>
        </div>

    )
}

export default TarjetaPersonaje;