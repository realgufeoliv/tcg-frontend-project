/**
 * @returns {Array}
 */

export const getSealedProductsList = () => [
  {
    title: "Blisters",

    route: { name: "sealed-products.blisters" },
    img: "/blisterPokemonTcg.png",
  },
  {
    title: "Decks temáticos",
    route: { name: "sealed-products.theme-decks" },
    img: "deckTemativoMewtwo.png",
  },
  {
    title: "Trainer kits",
    route: { name: "sealed-products.trainers-kits" },
    img: "trainerKitPokemonTcg.png",
  },
  {
    title: "Tins",
    route: { name: "sealed-products.tins" },
    img: "tinsPokemonTcg.png",
  },

  {
    title: "Elite Trainer Boxes",
    route: { name: "sealed-products.elite-trainer-boxes" },
    img: "eliteTrainerPokemonTcg.png",
  },
];
