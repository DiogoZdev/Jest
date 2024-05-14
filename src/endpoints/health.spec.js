describe("call /health endpoint", () => {
  it("should return 200", async () => {
    const res = await fetch("http://localhost:3000/health");

    expect(res.status).toBe(200);

    expect(await res.text()).toContain("App running!");
  });
});
