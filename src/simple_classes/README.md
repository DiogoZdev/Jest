[<- back to Home](https://github.com/DiogoZdev/Jest)

## Testing a class

Testing a simple class is very similar to testing a function.
In this case, we create a new instance of the class following the input and evaluate the outcome.
It's important to always test the good and bad scenarios, assuring the different possibilities will be tested.

`user.example.spec.js`

```js
describe("User", () => {
  it("should have a first name with good input", () => {
    // in this case, we can assume there is a User class that receives the full name as `name` and `age`
    const user = new User({ name: "John Doe", age: 31 });

    // after creating as instance of the class, I expect it to pass just the fisrt name to an attribute `firstName`
    expect(user.firstName()).toBe("John");
  });

  it("Should throw an error for no input", () => {
    // Here I can assume I need to throw an error if no input is provided
    expect(() => new User()).toThrow();
  });

  it("Should throw error if user is a minor", () => {
    expect(() => new User({ name: "James", age: 16 })).toThrow(
      "User cannot be under 18"
    );
  });
});
```

Creating and understanding the test first, I can now code the class knowing they will be automatically tested and the code must follow the rules and behavior as expected given the predefined scenarios.

Wrapping up:

- Create a new instance of the class
- Validate good and bad scenarios
- Validate internal class logic (validate what happens, not how)
- If a class imports a helper function, that function doesn't have to be tested again

[<- back to Home](https://github.com/DiogoZdev/Jest)
