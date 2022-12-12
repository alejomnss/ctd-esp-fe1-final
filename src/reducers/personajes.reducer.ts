import { Reducer } from "@reduxjs/toolkit";
import { PersonajesAcciones } from "../actions/personajes.actions";
import InfoPagina from "../types/infoPagina.types";
import Personaje from "../types/personaje.types"

interface PersonajesState {
    status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
    personajes: Personaje[];
    query: string;
    infoPagina: InfoPagina;
    error: string | number | null;
}

const initialState: PersonajesState = {
    status: "IDLE",
    personajes: [],
    query: "",
    infoPagina: { count: 0, pages: 0, next: "", prev: "" },
    error: null,
}

/**
 * 
 * @param {State} state 
 * @param {DataStore.Reducer<PersonajesState, PersonajesAcciones>} action 
 * @returns {State}
 */

const personajesReducer: Reducer<PersonajesState, PersonajesAcciones> = (state = initialState, action): PersonajesState => {
    switch (action.type) {
        case "GET_PERSONAJES":
            return {
                ...state,
                status: "LOADING",
                personajes: [],
                query: action.query,
                error: null,
            };
        case "GET_PERSONAJES_EXITOSO":
            return {
                ...state,
                status: "COMPLETED",
                personajes: action.personajes,
                infoPagina: action.infoPagina,
            };
        case "GET_PERSONAJES_ERROR":
            return {
                ...state,
                status: "FAILED",
                personajes: [],
                error: action.error,
            };
        default:
            return { ...state };
    }
};

export default personajesReducer;