console.log("using burgers_controller.js");

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res){
	burger.selectAll(function(data) {
		var hbsObject = {
			burger: data
		};
		console.log(hbsObject);
    	res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.insertOne(req.body.newBurgerName, function() {
		console.log(req.body.newBurgerName);
		res.redirect("/");
	});
});

router.put("/:id", function(req, res){

	burger.updateOne(req.body.burgerID, function() {
		console.log(req.body.burgerID);
		res.redirect("/");
	});

});


module.exports = router;