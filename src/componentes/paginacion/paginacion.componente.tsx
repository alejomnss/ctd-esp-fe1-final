import { FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReducerSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { cambiarPaginaThunk } from '../../actions/personajes.action';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * @returns un JSX element 
 */

const Paginacion: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReducerSelector;
    const dispatch = useDispatch();

    const infoPagina = useSelector((state) => state.personajes.infoPagina);
    const { count, proximo, paginas, previo } = infoPagina
    
    const paginaPrevia = () => {
        dispatch(cambiarPaginaThunk(previo));
    };

    const paginaProxima = () => {
        dispatch(cambiarPaginaThunk(proximo));
    };
    
    return (
        <div className="paginacion">
            <button onClick={paginaPrevia} disabled={previo === null ? true : false} className={"primary"}>Anterior</button>
            <button onClick={paginaProxima} disabled={proximo === null ? true : false} className={"primary"}>Siguiente</button>
        </div>
    );
};

export default Paginacion;