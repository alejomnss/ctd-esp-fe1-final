import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { fetchEpisodios } from "../servicios/personajes.servicios";
import { IRootState } from "../store/store";
import Episodio from "../types/episodio.types";


interface getEpisodiosAccion extends Action {
    type: "GET_EPISODIOS";
    query: string;
}

interface getEpisodiosExitosoAccion extends Action {
    type: "GET_EPISODIOS_EXITOSO";
    episodios: Episodio | Episodio[];
}

interface getEpisodiosErrorAccion extends Action {
    type: "GET_EPISODIOS_ERROR";
    error: string;
}

const getEpisodios: ActionCreator<getEpisodiosAccion> = (query: string) => {
    return {
        type: "GET_EPISODIOS",
        query: query,
    };
};

const getEpisodiosExitoso: ActionCreator<getEpisodiosExitosoAccion> = (episodios: Episodio | Episodio[]) => {
    return {
        type: "GET_EPISODIOS_EXITOSO",
        episodios: episodios,
    };
};

const getEpisodiosError: ActionCreator<getEpisodiosErrorAccion> = (mensaje: string) => {
    return {
        type: "GET_EPISODIOS_ERROR",
        error: mensaje,
    };
};

export type EpisodiosAcciones = | ReturnType<typeof getEpisodios> | ReturnType<typeof getEpisodiosExitoso> | ReturnType<typeof getEpisodiosError>;

interface FetchEpisodiosThunkAction extends ThunkAction<void, IRootState, unknown, EpisodiosAcciones> { }

export const getEpisodiosThunk = (
    arrayEpisodioID: (string | undefined)[]): FetchEpisodiosThunkAction => {
    return async (dispatch, getState) => {
        try {
            const response = await fetchEpisodios(arrayEpisodioID);
            if (response !== undefined) {
                dispatch(getEpisodiosExitoso(response));
            }
        } catch (e) {
            dispatch(getEpisodiosError(e))
        }
    }

}