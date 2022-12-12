import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";



interface FavoritoAccion extends Action {
    type: "FAVORITE_TOGGLE";
    personaje: Personaje;
};

interface FavoritoCleanAll extends Action {
    type: "FAVORITE_CLEAN",
};

export const favoritosToggle: ActionCreator<FavoritoAccion> = (
    personaje: Personaje) => ({
        type: "FAVORITE_TOGGLE",
        personaje,
});
    
export const favoritoCleanAll: ActionCreator<FavoritoCleanAll> = () => ({
    type: "FAVORITE_CLEAN",
});

export type FavoritosAcciones = | ReturnType<typeof favoritosToggle> | ReturnType<typeof favoritoCleanAll>;