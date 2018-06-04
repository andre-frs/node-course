const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', (request, response) => {
    response.render('index', {
        title: 'Hello Express!!'
    });
});


app.listen(port, () => {
    console.log('Server is up on port ' + port);
});