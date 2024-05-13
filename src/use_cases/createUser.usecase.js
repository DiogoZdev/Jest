import { User } from "../simple_classes/user";

export class CreateUserUseCase {
  logger;

  constructor(logger) {
    this.logger = logger;
  }

  execute(userInput) {
    try {
      new User(userInput);

      this.logger.info("User created");
      return userInput;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
