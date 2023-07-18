import services from "../../../shared/http";
import * as types from "./mutation-types";

export const signupService = ({ payload }) => {
  return new Promise((resolve, reject) => {
    services.Auth.signup(payload)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
