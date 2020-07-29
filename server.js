var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 7090;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
    {name: "pistachio", price: 11, awesomeness: 15 }
  ];

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/icecreams/:name", (req, res) => {
    const targetFlavor = req.param.name
    const found = icecreams.find(flavor => flavor.name === targetFlavor)
    res.render("flavor", found)
});

app.get ("/icecreams", function (req, res){
    res.render("icecreams")
})








  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });