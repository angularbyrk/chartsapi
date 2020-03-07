var express = require("express");

var router = express.Router();

var mongoDB = require("mongodb");

var db;

mongoDB.connect("mongodb+srv://student1:student@cluster0-ayjgg.mongodb.net/test",function(err,client){
    if(err){
        console.log(err);
        return;
    }
    db = client.db("charts");
});

router.get("/yearWiseData",function(req,resp){
    db.collection("registration").find().toArray(function(err,results){
        if(err){
            console.log(err);
            return;
        }
        resp.send(results);
    })
});

router.get("/courseWiseJobsData",function(req,resp){
    db.collection("jobs").find().toArray(function(err,results){
        if(err){
            console.log(err);
            return;
        }
        resp.send(results);
    })
});

router.get("/courseRegYearsWiseData/:year",function(req,resp){
    db.collection("course").find({"year":parseInt(req.params.year)}).toArray(function(err,results){
        if(err){
            console.log(err);
            return;
        }
        resp.send(results);
    })
});

module.exports = router;
