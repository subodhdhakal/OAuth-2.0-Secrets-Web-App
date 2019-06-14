//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser});

const userSchema = {
    email: String,
    password: String
};

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res) {   //When user tries to access the home route, res.send("Hello")
    res.render("home");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.get("/register", function(req,res){
    res.render("register");
});

app.listen(3000, function() {
    console.log("Server started at port 3000");
});