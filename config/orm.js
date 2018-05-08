var connection = require('../config/connection.js');

var orm = {
    //select all burgers from table
    selectAll: function(tableName){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, res){
            if (err) throw err;
            console.log(res);
        })
    },
    //insert new burger to the table
    insertOne: function(tableName,colName, valueOfCol ){
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [tableName,colName,valueOfCol], function(err,res){
            if(err) throw err;
            console.log(res);
        })
    },
    //update eaten or not yet eaten
    updateOne: function(tableName,valueOfCol){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(queryString,[tableName,colBoolean,valueOfColBoolena,idOfItem, idValue], function(err, res){
            if (err) throw err;
            console.log(res);
        })
    }
};

//export orms for use.
module.exports = orm;

