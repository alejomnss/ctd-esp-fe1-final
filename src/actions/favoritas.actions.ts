import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";



interface FavoritasAccion extends Action {
    type: "FAVORITE_TOGGLE";
    personaje: Personaje;
};

interface FavoritaCleanAll extends Action {
    type: "FAVORITE_CLEAN",
};

export const favoritasToggle: ActionCreator<FavoritasAccion> = (
    personaje: Personaje) => ({
        type: "FAVORITE_TOGGLE",
        personaje,
});
    
export const favoritaClean: ActionCreator<FavoritaCleanAll> = () => ({
    type: "FAVORITE_CLEAN",
});

export type FavoritasAcciones = | ReturnType<typeof favoritasToggle> | ReturnType<typeof favoritaClean>;