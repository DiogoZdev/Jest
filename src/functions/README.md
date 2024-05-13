[<- back to Home](https://github.com/DiogoZdev/Jest)

## Testing a function

Testing a function is as simple as describing expectations for the outcome of an event.
Breaking down the example test for a function we have:

`validateUser.example.spec.ts`

```js
// here I describe what function I'm testing
describe("validateUser", () => {
  // tests go inside this arrow function

  // here I specify the test scenario
  it("should return isValid: false for bad input", () => {
    // here I prepare the data I need before testing
    const userInput = {};

    // here I trigger the event tested
    const result = validateUser(userInput);

    // the real test happens when I compare my expectation to the actual outcome.
    expect(result.isValid).toBe(false);
    expect(result.errors).toHaveLength(1);
  });
});
```

From that I can understand I have a function that:

- is named `validateUser`
- receives a `userInput` object
- returns an object with `isValid`:boolean and `errors`:array

Wrapping up:

- Setting the prerequirements
- Triggering the event to be tested
- Comparing expectations and outcomes

[<- back to Home](https://github.com/DiogoZdev/Jest)
