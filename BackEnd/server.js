const express = require("express");
const app =express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    res.json({ message: email, password: password });
});

app.listen(PORT, ()=> {
    console.log(`Server started at port: ${PORT}`);
})