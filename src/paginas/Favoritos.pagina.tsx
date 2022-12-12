import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { IRootState } from "../store/store";
import { favoritaClean } from "../actions/favoritas.actions";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns {React.ReactElement}
 */
const PaginaFavoritos: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoriteMap = useSelector((state) => state.favoritas.favoritesMapa);
    const dispatch = useDispatch();

    return (
    <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => dispatch(favoritaClean())}>Limpiar Favoritos</button>
        </div>
            {favoriteMap.size === 0 ? (
                <>No hay Favoritos</>
            ) : (
                <div>
                    {Array.from(favoriteMap.values()).map((personaje) => {
                        return (
                            <div key={personaje.id}>
                                <TarjetaPersonaje personaje={personaje} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default PaginaFavoritos;