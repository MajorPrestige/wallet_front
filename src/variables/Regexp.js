export const emailRegexp = /^\w+[\w-.]*\w@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

export const passwordRegexp = {
  lettersFull: /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  numbers: /^.*(?=.*\d).*$/,
  lettersShort: /((?=.*[a-z]){1})((?=.*[A-Z]){1})/,
  strong: /(?=.{6,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1})/,
};

export const nameRegexp = /^[A-zА-я0-9]{1,12}$/;