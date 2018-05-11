// import orm.js
// create code to call orm
// exports

var orm = require('../config/orm.js')

var burgers = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function (res) {
      cb(res);
    })
  },
  insertOne: function(valueOfCol,cb){
      orm.insertOne('burgers','burger_name', valueOfCol, function(res){
          cb(res);
      })
  },
  updateOne: function(valueOfColBoolean,idOfItem,idValue,cb){
      orm.updateOne('burgers', 'devoured',valueOfColBoolean,idOfItem,idValue, function(res){
          cb(res);
      })
  }

}

//export orms for use
module.exports = burgers;
