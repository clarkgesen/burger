const express = require('express');

const burger = require("./models/burger");

// Import routes and give the server access to them
const routes = require("./controllers/burgersController");

// orm.selectAll("burgers",(result) => {
//   console.log(result);
// });

// orm.insertOne("burgers", {
//   burger_name : "The Barnyard",
//   devoured: false
// }, (result) => {
//   console.log(result);
// });

// orm.updateOne("burgers", {
//   burger_name: "Big Mac",
//   devoured: true,

// }, 4, (result) => {
//   console.log(result);
// })

// burger.list((result) => {
//   console.log(result);
// })

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: port " + PORT);
});
