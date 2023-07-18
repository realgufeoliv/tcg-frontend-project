/**
 * resizes the length of the name parameter according to the length of the screen
 * @returns {string}
 */
export const resizeName = (name) => {
  const numChar = screen.width >= 1920 ? 30 : screen.width > 1368 ? 24 : 30;

  return name.length > numChar ? `${name.substring(0, numChar)}...` : name;
};

export const resizeShoppingCartCardName = (name) => {
  const numChar = screen.width >= 1024 ? 20 : screen.width > 600 ? 20 : 15;
  return name.length > numChar ? `${name.substring(0, numChar - 3)}...` : name;
};

export function hashFnv32a(str, asString, seed) {
  /*jshint bitwise:false */
  let i,
    l,
    h_val = seed === undefined ? 0x811c9dc5 : seed;

  for (i = 0, l = str.length; i < l; i++) {
    h_val ^= str.charCodeAt(i);
    h_val +=
      (h_val << 1) + (h_val << 4) + (h_val << 7) + (h_val << 8) + (h_val << 24);
  }
  if (asString) {
    // Convert to 8 digit hex string
    return ("0000000" + (h_val >>> 0).toString(16)).substr(-8);
  }
  return h_val >>> 0;
}
