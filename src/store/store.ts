import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import thunk from "redux-thunk";
import personajesReducer from "../reducers/personajes.reducer";
import episodiosReducer from "../reducers/episodios.reducer";
import favoritasReducer from "../reducers/favoritas.reducer";


const rootReducer = combineReducers({
    personajes: personajesReducer,
    episodios: episodiosReducer,
    favoritas: favoritasReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)