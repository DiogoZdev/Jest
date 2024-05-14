import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).send("App running!");
});

app.post("/user", async (req, res) => {
  try {
    const input = await req.body;

    if (!input || !input.username) return res.status(400).send("Bad request");

    delete input.password;
    delete input.passwordConfirmation;

    return res.status(200).json({
      mesage: "created user for " + input?.username || "err",
      data: input,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
