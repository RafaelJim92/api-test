app.get("/", (req, res) => {
    res.send("Welcome to my Rafael's backend application");
});

app.get("/rafael", (req, res) => {
    res.send("Hello Rafael!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
