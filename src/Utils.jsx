const Utils = {
  getLocal: (name) => {
    if (name) {
      const value = window.localStorage.getItem(name);
      return JSON.parse(value);
    } else return false;
  },
  setLocal: (name, value) => {
    if (name && value) {
      const jValue = JSON.stringify(value);
      window.localStorage.setItem(name, jValue);
    } else return false;
  },
};

export default Utils;
