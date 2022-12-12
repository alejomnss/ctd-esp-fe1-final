import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { cambiarPagina, getPersonajesAPI } from "../servicios/personajes.servicios";
import { IRootState } from "../store/store";
import InfoPagina from "../types/infoPagina.types";
import Personaje from "../types/personaje.types"


interface getPersonajesAction extends Action {
    type: "GET_PERSONAJES";
    query: string;
}

interface getPersonajesExitosoAccion extends Action {
    type: "GET_PERSONAJES_EXITOSO";
    personajes: Personaje[];
    infoPagina: InfoPagina;
}

interface getPersonajesErrorAccion extends Action {
    type: "GET_PERSONAJES_ERROR";
    error: string | number;
}

const getPersonajes: ActionCreator<getPersonajesAction> = (query: string) => {
    return {
        type: "GET_PERSONAJES",
        query: query,
    };
};

const getPersonajesExitoso: ActionCreator<getPersonajesExitosoAccion> = (personajes: Personaje[], infoPagina: InfoPagina) => {
    return {
        type: "GET_PERSONAJES_EXITOSO",
        personajes: personajes,
        infoPagina: infoPagina,
    };
};

const getPersonajesError: ActionCreator<getPersonajesErrorAccion> = (mensaje: string | number) => {
    return {
        type: "GET_PERSONAJES_ERROR",
        error: mensaje,
    };
};


export type PersonajesAcciones = | ReturnType<typeof getPersonajes> | ReturnType<typeof getPersonajesExitoso> | ReturnType<typeof getPersonajesError>;

interface FetchPersonajesThunkAccion extends ThunkAction<void, IRootState, unknown, PersonajesAcciones> { }

export const fetchPersonajesThunk = (
    query: string
): FetchPersonajesThunkAccion => {
    return async (dispatch, getState) => {
        dispatch(getPersonajes(query));
        try {
            const response = await getPersonajesAPI(query);
            const [personajes, info, status] = response;
            if (status === 200) {
                dispatch(getPersonajesExitoso(personajes, info));
            } else {
                dispatch(getPersonajesError(status));
            }
        } catch (e) {
            dispatch(getPersonajesError(e));
        }
    };
};


export const cambiarPaginaThunk = (url: string): FetchPersonajesThunkAccion => {
    return async (dispatch, getState) => {
        try {
            const [personajes, info] = await cambiarPagina(url);
            dispatch(getPersonajesExitoso(personajes, info));
        } catch (e) {
            dispatch(getPersonajesError(e))
        }
    }
}