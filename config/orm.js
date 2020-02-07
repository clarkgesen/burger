const connection = require("./connection.js");

const orm = {
  //   all: function(tableInput, cb) {
  //     const queryString = "SELECT * FROM " + tableInput + ";";
  //     connection.query(queryString, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }
  //       cb(result);
  //     });
  //   },
  //   create: function(table, cols, vals, cb) {
  //     const queryString = "INSERT INTO " + table;

  //     queryString += " (";
  //     queryString += cols.toString();
  //     queryString += ") ";
  //     queryString += "VALUES (";
  //     queryString += printQuestionMarks(vals.length);
  //     queryString += ") ";

  //     console.log(queryString);

  //     connection.query(queryString, vals, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  //   },
  //   // An example of objColVals would be {name: panther, sleepy: true}
  //   update: function(table, objColVals, condition, cb) {
  //     const queryString = "UPDATE " + table;

  //     queryString += " SET ";
  //     queryString += objToSql(objColVals);
  //     queryString += " WHERE ";
  //     queryString += condition;

  //     console.log(queryString);
  //     connection.query(queryString, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     });
  //   }
  // };

  selectAll: (table, callback) => {
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], (err, result) => {
      if (err) {
        throw err;
      }
      // get the result back to the user
      callback(result);
    });
  },

  insertOne: (table, data, callback) => {
    const queryString = "INSERT INTO ?? SET ?;";
    connection.query(queryString, [table, data], (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },

  updateOne: (table, data, id, callback) => {
    const queryString = "UPDATE ?? SET ? WHERE id = ?;";
    connection.query(queryString, [table, data, id], (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });

  }
};

module.exports = orm;