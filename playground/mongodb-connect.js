const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) return console.log('Unnable to connect to Mongodb server');
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'something to do',
        complete: false
    }, (err, result) => {
        if (err) return console.log('Unnable to insert todo', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Argtype').insertOne({
    //     string: 'Asdf',
    //     bool: true,
    //     int: 12345,
    //     float: 1.5,
    //     arr: [1, 2, 3, 4, 5],
    //     obj: {"A": "B"}
    // }, (err, result) => {
    //     if (err) return console.log('Unnable to insert todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});