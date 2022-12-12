import { Reducer } from "@reduxjs/toolkit";
import Episodio from "../types/episodio.types";
import {EpisodiosAcciones} from "../actions/episodios.actions"



interface EpisodiosState {
    status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
    episodios: Episodio | Episodio[];
    error: string | null;
}

const initialState: EpisodiosState = {
    status: "IDLE",
    episodios: [],
    error: null,
};

/**
 * @param {State} state
 * @param {DataStore.Reducer<EpisodiosState, EpisodiosAcciones>} action
 * @returns {State}
 */

const episodiosReducer: Reducer<EpisodiosState, EpisodiosAcciones> = (state = initialState, action): EpisodiosState => {
    switch (action.type) {
        case "GET_EPISODIOS":
            return {
                ...state,
                status: "LOADING",
                episodios: [],
                error: null,
            };
        case "GET_EPISODIOS_EXITOSO":
            return {
                ...state,
                status: "COMPLETED",
                episodios: action.episodios,
            };
        case "GET_EPISODIOS_ERROR":
            return {
                ...state,
                status: "FAILED",
                error: action.error,
            };
        default:
            return { ...state };
    };
};

export default episodiosReducer;