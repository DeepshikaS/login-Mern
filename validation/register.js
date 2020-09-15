const { default: validator } = require("validator");

const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email required";
  } else if (Validator.isEmail(data.email)) {
    errors.email = "Email invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Password required";
  }

  if (Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password length must be atleast 6";
  }

  if (Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords doesn't match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
