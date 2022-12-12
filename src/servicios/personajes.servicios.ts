import Episodio from "../types/episodio.types";
import InfoPagina from "../types/infoPagina.types";
import Personaje from "../types/personaje.types"

/**
 * 
 * @param {string | undefined} name
 * @returns {Promise<[Personaje[], InfoPagina, number] | [any, any, number]>}
 */


export const getPersonajesAPI = async (
    nombre?: string
): Promise<[Personaje[], InfoPagina, number] | [any, any, number]> => {
    let nombreParametro = "";
    if (nombre !== "" && nombre !== undefined) {
        nombreParametro = `name=${nombre}`;
    }

    return fetch(`https://rickandmortyapi.com/api/character?${nombreParametro}`).then(
    function (response) {
      return response
        .json()
        .then((data) => [data.results, data.info, response.status]);
        }
    );
};

/**
 * 
 * @param {string} url 
 * @returns {Promise<[Personaje[], InfoPagina]>} 
 */

export const cambiarPagina = async (url: string): Promise<[Personaje[], InfoPagina]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};

/**
 * @param {Array<number>} arrayEpisodioID
 * @returns {Promise<Episodio | Episodio[]>}
 */

export const fetchEpisodios = async (arrayEpisodioID: (string | undefined)[]): Promise<Episodio | Episodio[]> => {
    return (
        await fetch(`https://rickandmortyapi.com/api/episode/${arrayEpisodioID}`)
    ).json();
};