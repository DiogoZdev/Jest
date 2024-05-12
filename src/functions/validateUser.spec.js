import { validateUser } from "./validateUser";

describe("validateUser", () => {
  const userInput = {
    username: "Diogo",
    email: "mail@mail.com",
    password: "123",
    passwordConfirmation: "123",
    birthdate: "2000-01-01",
  };

  it("should return true for good input", () => {
    const result = validateUser(userInput);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("Should return error for missing fields", () => {
    const result = validateUser({});

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("All fields are required");
  });

  it("should return error for bad email", () => {
    const result = validateUser({
      ...userInput,
      email: "m@il",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Invalid email");
  });

  it("should return error for mismatched passwords", () => {
    const result = validateUser({
      ...userInput,
      passwordConfirmation: "321",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Passwords do not match");
  });
});
