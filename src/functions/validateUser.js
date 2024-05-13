const emailRegex = /[A-z0-9._%+-]{4,}@[A-z]{4,}\.[A-z]{2,}/;

export function validateUser(input) {
  const validation = {
    isValid: true,
    errors: [],
  };

  if (
    !input ||
    !input.username ||
    !input.email ||
    !input.password ||
    !input.passwordConfirmation ||
    !input.birthdate
  ) {
    validation.isValid = false;
    validation.errors.push("All fields are required");
    return validation;
  }

  if (!emailRegex.test(input.email)) {
    validation.isValid = false;
    validation.errors.push("Invalid email");
  }

  if (input.password !== input.passwordConfirmation) {
    validation.isValid = false;
    validation.errors.push("Passwords do not match");
  }

  if (input.password.length < 8) {
    validation.isValid = false;
    validation.errors.push("Password must be at least 8 characters");
  }

  return validation;
}
