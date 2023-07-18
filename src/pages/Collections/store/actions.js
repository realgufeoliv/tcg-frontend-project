import pokemon from "pokemontcgsdk";
import * as types from "./mutation-types";

export const setAllSets = ({ commit }, payload) => {
  commit(types.SET_ALL_SETS, payload);
};

export const fetchAllSets = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    pokemon.set
      .all()
      .then(async (sets) => {
        await dispatch("setAllSets", sets);
        console.log(sets); // "Base"
        resolve();
      })
      .catch((error) => {
        console.log("erro");
        reject();
      });
  });
};
