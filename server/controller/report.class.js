var mysql=require('../model/database.class');
const fs = require('fs');

exports.CDR=function(req, res, next){
    mysql.Open();    
    mysql.SqlQuery("SELECT dd.`id`, dd.`idsupplier`, dd.`number`, que.`queue_name` FROM did dd JOIN queue que ON dd.`queue_name`=que.`id`");
    mysql.RunQuery(function(data) {
    	res.send(data);
    });
    mysql.Close();
}

exports.Daily=function(req, res, next){
    mysql.Open();    
    mysql.SqlQuery("SELECT dd.`id`, dd.`idsupplier`, dd.`number`, que.`queue_name` FROM did dd JOIN queue que ON dd.`queue_name`=que.`id`");
    mysql.RunQuery(function(data) {
    	res.send(data);
    });
    mysql.Close();
}

exports.Monthly=function(req, res, next){
    mysql.Open();    
    mysql.SqlQuery("SELECT dd.`id`, dd.`idsupplier`, dd.`number`, que.`queue_name` FROM did dd JOIN queue que ON dd.`queue_name`=que.`id`");
    mysql.RunQuery(function(data) {
    	res.send(data);
    });
    mysql.Close();
}

exports.ExtensionWise=function(req, res, next){
    mysql.Open();    
    mysql.SqlQuery("SELECT dd.`id`, dd.`idsupplier`, dd.`number`, que.`queue_name` FROM did dd JOIN queue que ON dd.`queue_name`=que.`id`");
    mysql.RunQuery(function(data) {
    	res.send(data);
    });
    mysql.Close();
}

exports.DepartmentWise=function(req, res, next){
    mysql.Open();    
    mysql.SqlQuery("SELECT dd.`id`, dd.`idsupplier`, dd.`number`, que.`queue_name` FROM did dd JOIN queue que ON dd.`queue_name`=que.`id`");
    mysql.RunQuery(function(data) {
    	res.send(data);
    });
    mysql.Close();
}
