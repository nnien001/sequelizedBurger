console.log("using burger.js");
var orm = require("../config/orm.js");

var burger= {

	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
  
  	insertOne: function(newBurgerName, cb) {
    	orm.insertOne("burgers", "burger_name", newBurgerName, function(res) {
      		cb(res);
    	});
  	},

  	updateOne: function(burgerID, cb) {
  		orm.updateOne("burgers", "devoured", true, "id", burgerID, function(res) {
  			cb(res);
  		});
  	}

}

module.exports = burger;