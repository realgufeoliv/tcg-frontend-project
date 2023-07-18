import pokemon from "pokemontcgsdk";
import * as types from "./mutation-types";

export const setAllCards = ({ commit }, payload) => {
  commit(types.SET_ALL_CARDS, payload);
};

export const fetchAllCards = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    pokemon.card
      .find("base1-4")
      .then(async (card) => {
        await dispatch("setAllCards", card.name);
        // "Charizard"
        console.log("funcionou");
        resolve();
      })
      .catch((error) => {
        console.log("erro");
        reject();
      });
  });
};
