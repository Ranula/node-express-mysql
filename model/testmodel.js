'use strict';
var sql = require('../dbHandler.js');

var Test = function(test){
    this.test_id = test.test_id;
    this.test_name = test.test_name;
}

Test.createTest = function createTest(newTest, result) {
    sql.query("INSERT INTO test_table set ?", newTest, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
}

Test.getAllTests = function getAllTests(result){
    sql.query("SELECT * from test_table", function(err,res){
        if(err){
            result(null,err);
        }
        else{
            result(null,res)
        }
    })
}

module.exports = Test;