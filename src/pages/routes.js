export default [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        visible: true,
        component: () => import("src/pages/Home/homePage.vue"),
      },
      {
        path: "cards",
        name: "cards",
        visible: true,
        component: () => import("src/pages/Cards/cardsPage.vue"),
      },
      {
        path: "bulk",
        name: "bulk",
        visible: true,
        component: () => import("src/pages/Bulk/bulkPage.vue"),
      },
      {
        path: "booster-boxes",
        name: "booster-boxes",
        visible: true,
        component: () => import("src/pages/BoosterBoxes/boosterBoxesPage.vue"),
      },
      {
        path: "sealed-products",
        name: "sealed-products",
        visible: true,
        component: () =>
          import("src/pages/SealedProducts/sealedProductsPage.vue"),
      },
      {
        path: "accessories",
        name: "accessories",
        visible: true,

        component: () => import("src/pages/Accessories/accessoriesPage.vue"),
      },
      {
        path: "collections",
        name: "collections",
        visible: true,

        component: () => import("src/pages/Collections/collectionsPage.vue"),
      },
      {
        path: "binders",
        name: "accessories.binders",
        visible: true,

        component: () =>
          import("src/pages/Accessories/AccessoriesPages/bindersPage.vue"),
      },
      {
        path: "deck-box",
        name: "accessories.deck-box",
        visible: true,

        component: () =>
          import("src/pages/Accessories/AccessoriesPages/deckboxPage.vue"),
      },
      {
        path: "dices",
        name: "accessories.dices",
        visible: true,

        component: () =>
          import("src/pages/Accessories/AccessoriesPages/dicesPage.vue"),
      },
      {
        path: "playmats",
        name: "accessories.playmats",
        visible: true,

        component: () =>
          import("src/pages/Accessories/AccessoriesPages/playmatsPage.vue"),
      },
      {
        path: "sleeves",
        name: "accessories.sleeves",
        visible: true,

        component: () =>
          import("src/pages/Accessories/AccessoriesPages/sleevesPage.vue"),
      },
      {
        path: "blisters",
        name: "sealed-products.blisters",
        visible: true,
        component: () =>
          import(
            "src/pages/SealedProducts/sealedProductsPages/blistersPage.vue"
          ),
      },
      {
        path: "elite-trainer-boxes",
        name: "sealed-products.elite-trainer-boxes",
        visible: true,
        component: () =>
          import(
            "src/pages/SealedProducts/sealedProductsPages/eliteTrainerBoxes.vue"
          ),
      },
      {
        path: "theme-decks",
        name: "sealed-products.theme-decks",
        visible: true,
        component: () =>
          import(
            "src/pages/SealedProducts/sealedProductsPages/themeDecksPage.vue"
          ),
      },
      {
        path: "tins",
        name: "sealed-products.tins",
        visible: true,
        component: () =>
          import("src/pages/SealedProducts/sealedProductsPages/tinsPage.vue"),
      },
      {
        path: "trainers-kits",
        name: "sealed-products.trainers-kits",
        visible: true,
        component: () =>
          import(
            "src/pages/SealedProducts/sealedProductsPages/trainersKitsPage.vue"
          ),
      },
      {
        path: "product-page",
        name: "product-page",
        visible: true,
        component: () => import("src/pages/productPage/productPage.vue"),
      },
      {
        path: "most-selled",
        name: "home-pages.most-selled",
        visible: true,
        component: () => import("src/pages/Home/homePages/mostSelled.vue"),
      },
      {
        path: "promotional-products",
        name: "home-pages.promotional-products",
        visible: true,
        component: () =>
          import("src/pages/Home/homePages/promotionalProducts.vue"),
      },
      {
        path: "profile-info",
        name: "profile-info",
        visible: true,
        component: () => import("src/pages/profileInfo/profileInfoPage.vue"),
      },
      {
        path: "announcements",
        name: "announcements",
        visible: true,
        component: () =>
          import("src/pages/loggedInPages/announcements/annoucementsPage.vue"),
      },
      {
        path: "desires",
        name: "desires",
        visible: true,
        component: () =>
          import("src/pages/loggedInPages/desires/desiresPage.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        visible: true,
        component: () =>
          import("src/pages/loggedInPages/notifications/notificationsPage.vue"),
      },
      {
        path: "orders",
        name: "orders",
        visible: true,
        component: () =>
          import("src/pages/loggedInPages/orders/ordersPage.vue"),
      },
      {
        path: "own-profile-info",
        name: "own-profile-info",
        redirect: { name: "own-profile-info.personal-info" },
        visible: true,
        component: () =>
          import(
            "src/pages/loggedInPages/ownProfileInfo/ownProfileInfoPage.vue"
          ),
        children: [
          {
            path: "own-profile-info",
            name: "own-profile-info.personal-info",
            visible: true,
            component: () =>
              import(
                "src/pages/loggedInPages/ownProfileInfo/ownProfilePages/personalInfo.vue"
              ),
          },
          {
            path: "addressInfo",
            name: "own-profile-info.address-info",
            visible: true,
            component: () =>
              import(
                "src/pages/loggedInPages/ownProfileInfo/ownProfilePages/addressInfo.vue"
              ),
          },
          {
            path: "addressInfo",
            name: "own-profile-info.transactions-info",
            visible: true,
            component: () =>
              import(
                "src/pages/loggedInPages/ownProfileInfo/ownProfilePages/transactionsInfo.vue"
              ),
          },
          {
            path: "addressInfo",
            name: "own-profile-info.bank-account-info",
            visible: true,
            component: () =>
              import(
                "src/pages/loggedInPages/ownProfileInfo/ownProfilePages/bankAccountInfo.vue"
              ),
          },
        ],
      },
      {
        path: "sales",
        name: "sales",
        visible: true,
        component: () => import("src/pages/loggedInPages/sales/salesPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/signUpLayout.vue"),
    children: [
      {
        path: "signUp",
        name: "signUp",
        visible: true,
        component: () => import("src/pages/Auth/signUp.vue"),
      },
    ],
  },
];
