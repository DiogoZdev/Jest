import { jest } from "@jest/globals";
import { CreateUserUseCase } from "./createUser.usecase";
import { userInput } from "../mocks/userInput.mock";

describe("createUser.usecase", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const loggerMock = {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };

  const userMock = userInput;
  const useCase = new CreateUserUseCase(loggerMock);

  it("Should log the creation of a user", () => {
    // trigger
    useCase.execute(userMock);

    // assert
    expect(loggerMock.info).toHaveBeenCalledWith("User created");
    expect(loggerMock.info).toHaveBeenCalledTimes(1);
    expect(loggerMock.error).toHaveBeenCalledTimes(0);
  });

  it("Should log an error for bad input", () => {
    // trigger
    useCase.execute();

    // assert
    expect(loggerMock.info).toHaveBeenCalledTimes(0);
    expect(loggerMock.error).toHaveBeenCalledTimes(1);
  });
});
