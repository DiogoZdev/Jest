import { User } from "./user";
import { userInput } from "../mocks/userInput.mock";

describe("User", () => {
  const input = userInput;

  it("should have a username with good input", () => {
    const user = new User(input);

    expect(user.username()).toBe("John");
  });

  it("Should throw an error for bad input", () => {
    expect(
      () =>
        new User({
          ...input,
          email: null,
        })
    ).toThrow("All fields are required");
  });
});
