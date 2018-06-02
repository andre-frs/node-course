const express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', (require, response) => {
    response.render('index', {
        title: 'Hello Express!!'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});