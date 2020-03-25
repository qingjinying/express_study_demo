const CONFIG_PORT = 3000;

let express = require('express');

let app = express();

app.get('/lol',function (req, res, next) {
    res.send('欢迎来到英雄联盟');

});

app.get('/lol',function (req, res, next) {
    res.send('欢迎来到英雄联盟');

});

app.get('/error', function (req, res, next) {
    next('出错了');
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.send('ERROR');
});

app.use(function (req, res, next) {
    console.log('404 NOT FOUND');
    res.send('404')
});

app.listen(CONFIG_PORT, function () {
    console.log('hello world');
});

