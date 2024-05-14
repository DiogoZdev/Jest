describe("call POST /user endpoint", () => {
  it("should return status 400 without input", async () => {
    const res = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(res.status).toBe(400);
  });

  it("should return status 200 with input", async () => {
    const res = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: "John",
        email: "m@il",
        birthdate: "1980-01-02",
      }),
    });

    expect(res.status).toBe(200);
  });
});
