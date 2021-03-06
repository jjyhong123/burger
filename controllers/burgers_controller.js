var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {   
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create("burger_name", [req.body.burger_name], function (result) {
        res.json(result);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.update(
        {
            devoured: 1
        },
        condition,
        function (result) {
            res.status(200).end();
        }
    );
});

// Export routes for server.js to use.
module.exports = router;
