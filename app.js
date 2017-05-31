/*
 * kt-membership-statistics-service 1.0.0
 * 방문자, 메뉴, 서비스 별로 다양한 통계 데이터와 차트
 * https://cms.membership.kt.com
 * Copyright ©2011 - 2017 KT corp. All rights reserved.
*/
var express = require('express');
var app = express();
var dummy = require('./dummy.js');
var restify  =require('restify');
var moment = require('moment');
var exphbs = require('express-handlebars');
var acc = require('accounting')

var formatter = new Intl.NumberFormat('en-US', {});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',function(req, res){
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/test', function(req, res){
  var client = restify.createJsonClient({
  url: 'http://localhost:8080',
  version: '*'
});
client.get('/books/', function(err, req1, res1, obj) {
//  console.log('%j', obj);
    res.render('home',{
      books:obj,
      helpers:{
        datetemp:function(d){ return moment(d,'YYYYMMDD').format('YYYY.MM.DD');},
        moneytemp:function(m){return formatter.format(m);}
      }
    });
});
})

app.use(express.static('src'));

app.get('/books', function(req, res) {
    res.send(dummy.data())
})

app.listen((process.env.PORT || 8080), function () {
    console.log('Example app listening on port 8080!');
});
