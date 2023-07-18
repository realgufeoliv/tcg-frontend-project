/**
 * @returns {Array}
 */

export const getMenuList = () => [
  {
    title: "Cards",

    route: { name: "cards" },
    img: "/cards.png",
  },
  {
    title: "Lotes",
    route: { name: "bulk" },
    img: "/loteDeCartas.png",
  },
  {
    title: "booster boxes e Boosters",
    route: { name: "booster-boxes" },
    img: "/boximg.png",
  },
  {
    title: "Produtos selados",
    route: { name: "sealed-products" },
    img: "/produtosSelados.png",
  },

  {
    title: "acessórios",
    route: { name: "accessories" },
    img: "acessorios.png",
  },
  {
    title: "coleções",
    route: { name: "collections" },
    img: "./collections.png",
  },
];

export const getBestSellersList = () => [
  {
    img: "https://images.pokemontcg.io/base1/4.png",
    name: "charizard (PGO 010)390",
    price: "1.000,00",
    id: 1,
  },
  {
    img: "/boosterBox.jpg",
    name: "charizard (PGO 010)",
    price: "120,00",
    id: 2,
  },
  {
    img: "/mewtwoElite.jpg",
    name: "charizard (PGO 010)",
    price: "120,00",
    id: 3,
  },
  {
    img: "/darkraiElite.jpg",
    name: "charizard (PGO 010)",
    price: "120,00",
  },
  {
    img: "/boosterBox.jpg",
    name: "Booster box",
    price: "120,00",
  },
  {
    img: "/booster.jpg",
    name: "booster",
    price: "120,00",
  },
  {
    img: "/venusaur.jpg",
    name: "Venusaur (PGO 004)",
    price: "120,00",
  },
  {
    img: "/mewtwoElite.jpg",
    name: "Venusaur (PGO 004)",
    price: "120,00",
  },
  {
    img: "/venusaur.jpg",
    name: "Venusaur (PGO 004)",
    price: "120,00",
  },
];

export const getPromotionalPricesList = () => [
  {
    img: "/bestpriceCompProduct1.jpg",
    name: "charizard (PGO 010)390",
    price: 10.0,
    id: 1,
  },
  {
    img: "/bestpriceCompProduct2.jpg",
    name: "charizard (PGO 010)",
    price: 10.0,
    id: 2,
  },
  {
    img: "/bestpriceCompProduct3.jpg",
    name: "charizard (PGO 010)",
    price: 10.0,
    id: 3,
  },
  {
    img: "/bestpriceCompProduct4.jpg",
    name: "charizard (PGO 010)",
    price: 10.0,
  },
  {
    img: "/bestpriceCompProduct5.jpg",
    name: "Booster box",
    price: 10.0,
  },
  {
    img: "/booster.jpg",
    name: "booster",
    price: 10.0,
  },
  {
    img: "/venusaur.jpg",
    name: "Venusaur (PGO 004)",
    price: 10.0,
  },
  {
    img: "/mewtwoElite.jpg",
    name: "Venusaur (PGO 004)",
    price: 10.0,
  },
  {
    img: "/venusaur.jpg",
    name: "Venusaur (PGO 004)",
    price: 10.0,
  },
];

export const getAllCardsList = () => [
  {
    title: "Cards",

    route: { name: "cards" },
    img: "/venusaur.jpg",
  },
];

export const getLoggedInMenu = () => [
  {
    name: "Minha Conta",
    icon: "person",
  },
  {
    name: "Notificações",
    icon: " notifications",
  },
  {
    name: "Meus pedidos",
    icon: "list_alt",
  },
  {
    name: "Desejados",
    icon: "favorite",
  },
  {
    name: "Vender",
  },
  {
    name: "Vendas",
    icon: "sell",
  },
];
