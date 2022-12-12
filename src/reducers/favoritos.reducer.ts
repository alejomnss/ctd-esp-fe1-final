import { Reducer } from "react";
import { FavoritosAcciones } from "../actions/favoritos.actions"
import Personaje from "../types/personaje.types";



interface StateFavoritos {
    mapeoFavoritos: Map<number, Personaje>;
}

const initialState: StateFavoritos = {
    mapeoFavoritos: new Map(),
}

const favoritosReducer: Reducer<StateFavoritos, FavoritosAcciones> = (state = initialState, action): StateFavoritos => {
    switch (action.type) {
        case "FAVORITE_TOGGLE":
            const map = new Map<number, Personaje>();
            state.mapeoFavoritos.forEach((personaje) => {
                map.set(personaje.id, personaje);
            });
            state.mapeoFavoritos.has(action.personaje.id) ? map.delete(action.personaje.id) : map.set(action.personaje.id, action.personaje);
            return {
                ...state,
                mapeoFavoritos: map,
            };
        case "FAVORITE_CLEAN":
            return {
                ...initialState,
            };
        default:
            return { ...state };
    };
};


export default favoritosReducer;