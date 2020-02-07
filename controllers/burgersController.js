const express = require("Express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    burger.all(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
});

router.post("/burgers/create", (req, res) => {
    burger.create([
        "name", "devoured"
      ], [
        req.body.name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        console.log(result);
        res.json({ name: result.insertName, devoured: result.devoured });
      });
});

router.put("/burgers/:id", (req, res) => {

});

module.exports = router;