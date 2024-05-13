import { validateUser } from "./validateUser";
import { userInput } from "../mocks/userInput.mock";

describe("validateUser", () => {
  const input = userInput;

  it("should return true for good input", () => {
    const result = validateUser(input);
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
      ...input,
      email: "m@il",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Invalid email");
  });

  it("should return error for mismatched passwords", () => {
    const result = validateUser({
      ...input,
      passwordConfirmation: "321",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain("Passwords do not match");
  });
});
