console.log("using burgers_controller.js");

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    db.sequelizedBurgers.findAll({}).then(function(dbBurgers) {
    	var hbsObject = {
			burger: dbBurgers
		};
      	console.log(hbsObject);
    	res.render("index", hbsObject);
    });
  });

  app.post("/", function(req, res) {
  	db.sequelizedBurgers.create({
		  burgerName: req.body.newBurgerName,
		  devoured: false
	  }).then(function(dbBurgers) {
      	res.redirect("/");
 	  });
  });

  app.put("/:id", function(req, res) {
    db.sequelizedBurgers.update({
    	devoured: true
    }, {
    	where: {
        id: req.body.burgerID
      }
    }).then(function(dbBurgers) {
        res.redirect("/");
    });
    
  });
};