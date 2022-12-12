import InfoPagina from "../types/infoPagina.types";
import Personaje from "../types/personaje.types"

/**
 * 
 * @param {string | undefined} nombre
 * @returns {Promise<[Personaje[], InfoPagina, number] | [any, any, number]>}
 */


export const getPersonajesAPI = async (nombre?: string): Promise<[Personaje[], InfoPagina, number] | [any, any, number]> => {
    let nombreParametro = "";
    if (nombre !== "" && nombre !== undefined) {
        nombreParametro = `nombre=${nombre}`;
    }

    return fetch(`https://rickandmortyapi.com/api/character?${nombreParametro}`).then(
        function (response) {
            return response
                .json()
                .then((data) => [data.results, data.info, response.status]);
        }
    );
};

export const cambiarPagina = async (url: string): Promise<[Personaje[], InfoPagina]> => {
    return fetch(url)
        .then((data) => data.json())
        .then((data) => [data.results, data.info]);
};


