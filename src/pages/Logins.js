const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
app.use(session({ secret: "secret key" }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

});

app.get("/login", (req, res) => {
    const { email, password } = req.body;

        req.session.loggedIn = true;
        res.send("登录成功!");

});

app.listen(3000);