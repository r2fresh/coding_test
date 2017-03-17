/*
 * kt-membership-statistics-service 1.0.0
 * 방문자, 메뉴, 서비스 별로 다양한 통계 데이터와 차트
 * https://cms.membership.kt.com
 * Copyright ©2011 - 2017 KT corp. All rights reserved.
*/
var express = require('express');
var app = express();
var dummy = require('./dummy.js')
var fs = require('fs');

app.get('/',function(req, res){
    res.sendFile(__dirname + '/src/index.html')
})

app.use(express.static('src'));

app.get('/books', function(req, res) {
    res.send(dummy.data())
})

app.listen((process.env.PORT || 8080), function () {
    console.log('Example app listening on port 8080!');
});

 var content = fs.readFileSync("/src/index.html");
 
