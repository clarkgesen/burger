const express = require("Express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
    burger.list((burgers) => {
      const viewData = {
        burgers: burgers
      };
      console.log(viewData);

      res.render("../views/layouts/index.handlebars", viewData);
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

router.post("/burgers/devour/:id", (req, res) => {
  const id = req.params.id;
  burger.devour(id, (result) => {
    res.redirect("/");
  });
});

module.exports = router;