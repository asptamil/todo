//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unabke to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
// db.collection('Todo').insertOne({
//   text: 'something to do',
//   completed: false
// }, (err, result) => {
//     if(err)
//     {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });

// db.collection('Users').insertOne({
//   _id:123,
//   name: 'tamil',
//   age: 27,
//   location: 'salme'
// }, (err, result) => {
//     if(err)
//     {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
// });
db.close();
});