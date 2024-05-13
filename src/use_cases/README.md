## Testing UseCases

A UseCase often presents a more complex scenario, joining a few complementary actions to execute a complete action.
In the example, the UseCase depends on an implementation of a logger, but it doesn't need to exist to allow our UseCase be tested.
With Jest we can create mocks to be used instead of real implementations.

```js
describe("createUser.usecase", () => {
  // If our usecase depends on a Logger with info, warn and error functions, we can mock them as:
  const loggerMock = {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };

  // To make sure we are counting the calls correctly, we must reset our mock each iteraction
  afterEach(() => {
    jest.clearAllMocks();
  });

  // here we can provide globally available useful constants to avoid code repetition
  const userMock = userInput;

  // and here, an instance of our useCase with the mock implemented
  const useCase = new CreateUserUseCase(loggerMock);

  it("Should log the creation of a user", () => {
    useCase.execute(userMock);

    expect(loggerMock.info).toHaveBeenCalledTimes(1);
    expect(loggerMock.error).toHaveBeenCalledTimes(0);
  });
});
```

Wrapping up:

- with jest.fn() we can mock functions, no matter their input or output
- with jest.clearAllMocks() we can reset the mocks before or after each test to reset calls and counts
- now we can validate how our UseCase interacts with its dependencies
