/**
 * check if is local mode
 */
import Cookies from "js-cookie";

let hasLcmSet = new URL(location.href).searchParams.get("lcm");

if (hasLcmSet) {
  Cookies.remove("set");
  Cookies.set("lcm", hasLcmSet, { expires: 99999 });
}

//const mode = Cookies.get('lcm') === '1' ? 'local': (  process.env.NODE_ENV === 'development' ? 'development': 'production' )

const mode = "local";
const urls = {
  mode,
  local: {
    baseURL: "http://127.0.0.1:8000",
  },
};

export default {
  ...urls[mode],
  urls,
  host: "https://api.pokemontcg.io/v2",
};
