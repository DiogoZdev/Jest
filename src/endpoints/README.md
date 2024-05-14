[<- back to Home](https://github.com/DiogoZdev/Jest)

## Testing an endpoint

IMPORTANT: to make an endpoint test, first we must assure our app is running so the endpoint will be available.

Testing an endpoint is very similar to testing an async function.
Breaking down the simple example we have:

`fetchHealth.example.spec.ts`

```js
describe("call /health endpoint", () => {
  // our test function is now async, as we must wait for the endpoint to respond
  it("should return 200", async () => {
    // from here, our app must provide a /health endpoint, it receives no parameters
    const res = await fetch("http://localhost:3000/health");

    // I have an expected status defined
    expect(res.status).toBe(200);

    // and I must return a simple message
    expect(await res.text()).toContain("App running!");
  });
});
```

Important:

As endpoints are usualy an interface to the app, we must not only test good scenarios, but test malformed request bodies, missing authorization and tokens and etc.

Wrapping up:

- Make sure the app is running
- Call the endpoint to be tested and wait for the answer
- Compare expectations and the response
- Test inconvenient cases

[<- back to Home](https://github.com/DiogoZdev/Jest)
