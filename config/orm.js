var connection = require('../config/connection.js');

var orm = {
    //select all burgers from table
    selectAll: function(tableName,cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res){
            if (err) throw err;
            cb(res);
        })
    },
    //insert new burger to the table
    insertOne: function(tableName,colName, valueOfCol,cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [tableName,colName,valueOfCol], function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    //update eaten or not yet eaten
    updateOne: function(tableName,colBoolean,valueOfColBoolean,idOfItem,idValue,cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString,[tableName,colBoolean,valueOfColBoolean,idOfItem, idValue], function(err, res){
            if (err) throw err;
            cb(res);
        })
    }
};

//export orms for use.
module.exports = orm;

