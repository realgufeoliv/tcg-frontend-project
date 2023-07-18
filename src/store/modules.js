import { stores as mainModules } from "./../pages";
import request from "./request-store";

console.log(mainModules);
export default {
  ...mainModules,
  request,
};
