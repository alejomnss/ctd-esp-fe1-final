import React, { FC, useEffect } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReducerSelector } from 'react-redux';
import { fetchPersonajesThunk } from '../../actions/personajes.action';
import { IRootState } from '../../store/store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @returns {React.ReactElement} un JSX element 
 */
const GrillaPersonajes: FC = () => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReducerSelector;
    const { status, personajes } = useSelector((state) => state.personajes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPersonajesThunk(""));
    }, [dispatch]);

    if (status == "LOADING") return <div>Cargando Personajes de Rick & Morty ...</div>;
    if (status == "FAILED") return <div>Fallo la carga de personajes, intenta de nuevo</div>;
    if (!personajes || personajes.length === 0) return <></>;

    return (
        <div className="grilla-personajes">
            {personajes.map((personaje) => {
                return (
                    <div key={personaje.id}>
                        <TarjetaPersonaje personaje={personaje} />
                    </div>
                )
            })}
        </div>
    );
};
 
export default GrillaPersonajes;