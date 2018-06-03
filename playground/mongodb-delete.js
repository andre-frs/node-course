const { MongoClient, ObjectId } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, client) => {
    if (err) return console.log('Unnable to connect to Mongodb server');
    console.log('Connected to Mongodb server');
    const db = client.db('TodoApp');

    try {
        const result = await db.collection('Todos').findOneAndDelete({complete: false});
        console.log('Todos');
        console.log(result);
    } catch (err) {
        console.log('Unnable to fetch todos', err);
    }

    client.close();
});

