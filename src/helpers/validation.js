export const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const isValidPassword = (password) => {
  return password && password.length > 7;
};

export const isInteger = (value) => {
  return Number.isInteger(value);
};

export const isNumber = (value) => {
  return typeof value === "number" && Number.isFinite(value);
};

export const isString = (value) => {
  return typeof value === "string";
};

export const isDate = (value) => {
  return !!Date.parse(value);
};
