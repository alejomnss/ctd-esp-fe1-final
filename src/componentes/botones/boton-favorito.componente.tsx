import { FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { favoritasToggle } from "../../actions/favoritas.actions"
import Personaje from '../../types/personaje.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @param {Personaje} personaje
 * @returns {React.ReactElement} 
 */
const BotonFavorito: FC<{ personaje: Personaje }> = ({ personaje }) => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoritaMap = useSelector((state) => state.favoritas.favoritesMapa);
    const dispatch = useDispatch();

    const src = require(favoritaMap.has(personaje.id)
        ? "../../imagenes/star-filled.png"
        : "../../imagenes/star.png")

    /**
     * 
     * @param {event} event 
     */
    const favoritasToggle = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        {/*dispatch(favoritasToggle(personaje));*/ }
    };


    return (
        < button className="boton-favorito" onClick={favoritasToggle} type="button">
            <img src={src} alt={"favorito"} />
        </button>
    );
};

export default BotonFavorito;