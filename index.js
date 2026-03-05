const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "anjalichavan",
        content : "I Love Coding"
    },
    {
        username : "rohitkokani",
        content : "I Love DSA"
    },{
        username : "jayshrirathore",
        content : "I Love Chemistry"
    }
];
app.get("/posts", ( req, res )=>{
    res.render("index.ejs", {posts});
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});


