import { routes as pages } from "../pages";
const routes = [
  ...pages,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/404/ErrorNotFound.vue"),
  },
];

export default routes;
