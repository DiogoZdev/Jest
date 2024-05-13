import { validateUser } from "../functions/validateUser";

export class User {
  #username;
  #email;
  #password;
  #birthdate;

  constructor(input) {
    const data = validateUser(input);
    if (!data.isValid) throw new Error(data.errors);

    this.#username = input.username;
    this.#email = input.email;
    this.#password = input.password;
    this.#birthdate = input.birthdate;
  }

  username() {
    return this.#username;
  }

  email() {
    return this.#email;
  }

  birthdate() {
    return this.#birthdate;
  }
}
