const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, client) => {
    if (err) return console.log('Unnable to connect to Mongodb server');
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    // try {
    //     const docs = await db.collection('Todos').find({ _id: new ObjectId('5b143d5e38beac0fa23ee619') }).toArray();
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // } catch (err) {
    //     console.log('Unnable to fetch todos', err);
    // }

    try {
        const count = await db.collection('Todos').find().count();
        console.log('Todos');
        console.log(count);
    } catch (err) {
        console.log('Unnable to fetch todos', err);
    }

    client.close();
});

