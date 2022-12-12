import { ChangeEvent, FC, useReducer } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector as useReducerSelector } from 'react-redux';
import { fetchPersonajesThunk } from '../../actions/personajes.action';
import { IRootState } from '../../store/store';
import './filtros.css';

/**
 * 
 * @returns {React.ReactElement} JSX element
 */

const Filtros: FC = () => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReducerSelector; 
    const query = useSelector((state) => state.personajes.query);
    const dispatch = useDispatch();

    const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
        let query = e.target.value;
        dispatch(fetchPersonajesThunk(query))
    };

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={onChange} value={query}/>
    </div>
}

export default Filtros;