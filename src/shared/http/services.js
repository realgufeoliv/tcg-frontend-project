import { services as pages } from "../../pages";
import helpers from "./../helpers";
import api from "./api";
import store from "./../../store";

let services = { ...pages };

/**
 * @Build-Request-From-Services
 */
Object.keys(services).map((module) =>
  Object.keys(services[module]).map((service) => {
    let conf = services[module][service]();
    let baseUrl = conf.url;

    services[module][service] = (
      data = null,
      binds = null,
      confParams = {}
    ) => {
      const newConf = Object.assign(conf, confParams);
      if (data) {
        let payload_name =
          newConf.method.toUpperCase() === "GET" ? "params" : "data";
        newConf[payload_name] = data;
      }
      if (binds) {
        newConf.url = helpers.urls.bind(baseUrl, binds);
      }
      return store.dispatch("request/persistBeforeCall", {
        url: newConf.url,
        conf: newConf,
        axios: api.request.bind(null, newConf),
      });
    };
  })
);
export default services;
