const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, client) => {
    if (err) return console.log('Unnable to connect to Mongodb server');
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    try {
        const docs = await db.collection('Todos').findOneAndUpdate(
            {_id: new ObjectId("5b144ec722b39b255c91d5cf")},
            {$set: {text: "walk the dog"}, $inc: {num: -5}},
            {returnOriginal: false}
        );
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    } catch (err) {
        console.log('Unnable to fetch todos', err);
    }


    client.close();
});

