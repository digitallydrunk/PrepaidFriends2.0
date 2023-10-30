const emailValidation = {
  regEx: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  error: "Invalid Email Address!",
};

const requiredValidation = {
  error: "Required!",
};

const validateEmail = (email) => {
  let error;
  if (!email) {
    error = requiredValidation?.error;
  } else if (!emailValidation.regEx.test(email)) {
    error = emailValidation?.error;
  }

  return error;
};

export { emailValidation, requiredValidation, validateEmail };
