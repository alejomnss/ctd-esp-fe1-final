import { Reducer } from "@reduxjs/toolkit";
import { FavoritasAcciones } from "../actions/favoritas.actions"
import Personaje from "../types/personaje.types";

interface FavoritasState {
    favoritesMapa: Map<number, Personaje>;
};

const initialState: FavoritasState = {
    favoritesMapa: new Map(),
};

/**
 * @param {State} state
 * @param {DataStore.Reducer<FavoritasState, FavoritasAcciones>} action
 * @returns {State}
 */

const favoritasReducer: Reducer<FavoritasState, FavoritasAcciones> = (state = initialState, action): FavoritasState => {
    switch (action.type) {
        case "FAVORITE_TOGGLE":
            const map = new Map<number, Personaje>();
            state.favoritesMapa.forEach((personaje) => {
                map.set(personaje.id, personaje);
            });
            
            state.favoritesMapa.has(action.personaje.id) ? map.delete(action.personaje.id) : map.set(action.personaje.id, action.personaje);
            return {
                ...state,
                favoritesMapa: map,
            };
        case "FAVORITE_CLEAN":
            return {
                ...initialState,
            };
        default:
            return { ...state };
    };
};


export default favoritasReducer;