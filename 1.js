//topic - middlewere

const express = require("express");

const app = express();

const middlewere2 = (req, res, next) => {
    console.log("3");
    next();
    console.log("4");
};

const middlewere1 = (req, res, next) => {
    console.log("1");
    next();
    console.log("2");
};

//use a middlewere
app.use(middlewere2);
app.use(middlewere1);

//Home page

app.get("/home", (req,res) => {
    console.log("Home page");

    res.send({msg: "home page"})
});

//About page

app.get("/about", (req,res) => {
    console.log("About page");

    res.send({msg: "about page"})
});

app.listen(8080,() => {
    console.log("server started");
});