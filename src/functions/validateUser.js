const emailRegex = /[A-z0-9._%+-]{4,}@[A-z]{4,}\.[A-z]{2,}/;

export function validateUser(input) {
  const { username, email, password, passwordConfirmation, birthdate } = input;

  const validation = {
    isValid: true,
    errors: [],
  };

  if (!username || !email || !password || !passwordConfirmation || !birthdate) {
    validation.isValid = false;
    validation.errors.push("All fields are required");
    return validation;
  }

  if (!emailRegex.test(email)) {
    validation.isValid = false;
    validation.errors.push("Invalid email");
    return validation;
  }

  if (password !== passwordConfirmation) {
    validation.isValid = false;
    validation.errors.push("Passwords do not match");
    return validation;
  }

  return validation;
}
