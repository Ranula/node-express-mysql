'use strict';

var Test = require('../model/testmodel');


exports.list_all_tests = function(req,res){
    Test.getAllTests(function(err,task){
        if(err) {console.log(err); res.send(err);}
        else{res.send(task)}
    });
}

exports.create_a_test = function(req,res) {
    var new_test = new Test(req.body);
    if(!new_test.test_id || !new_test.test_name){
        res.status(400).send({ error:true, message: 'Please provide a non empty test' });
    }else{
    Test.createTest(new_test,function(err,tests) {
        if(err) res.send(err); console.log(err);
        res.send(tests)
    });
    }
}