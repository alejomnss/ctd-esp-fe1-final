import { FC } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import { cambiarPaginaThunk } from '../../actions/personajes.actions';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * @returns un JSX element 
 */

const Paginacion: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const dispatch = useDispatch();

    const infoPagina = useSelector((state) => state.personajes.infoPagina);
    const { count, next, pages, prev } = infoPagina;
    
    const paginaPrevia = () => {
        dispatch(cambiarPaginaThunk(prev));
    };

    const paginaProxima = () => {
        dispatch(cambiarPaginaThunk(next));
    };
    
    return (
        <div className="paginacion">
            <button onClick={paginaPrevia} disabled={prev === null ? true : false} className={"primary"}>Anterior</button>
            <button onClick={paginaProxima} disabled={next === null ? true : false} className={"primary"}>Siguiente</button>
        </div>
    );
};

export default Paginacion;