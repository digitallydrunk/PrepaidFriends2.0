const emailValidation = {
  regEx: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  error: "Invalid Email Address!",
};

const requiredValidation = {
  error: "Required!",
};

export { emailValidation, requiredValidation };
