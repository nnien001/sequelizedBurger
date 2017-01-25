console.log("using orm.js");

var connection = require("./connection.js");

var orm = {

  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function(err, result) {
      if(err) {
        console.error("query failed: ") + err.stack;
        return;
      }
      else {
        cb(result);
      }
    });
  },

  insertOne: function(table, column, value, cb) {
    var queryString = "INSERT INTO ??(??) VALUES(?)";
    
    connection.query(queryString, [table, column, value], function(err, result) {
      if(err) {
        console.error("Insert failed: ") + err.stack;
        return;
      }

      cb(result);

    });
  },



  updateOne: function(table, column, updateValue, queryColumn, queryValue, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"

    connection.query(queryString, [table, column, updateValue, queryColumn, queryValue], function(err, result) {
      if(err) {
        console.error("Update failed: ") + err.stack;
        return;
      }
      else {
        cb(result);
      }
    });
  }

};

module.exports = orm;