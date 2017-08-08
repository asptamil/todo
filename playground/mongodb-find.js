//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);find({_id: new ObjectID('xxxxxxxxxxx')})

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unabke to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
// db.collection('Todos').find({Completed: true}).toArray().then((docs) => {
//   console.log(JSON.stringify(docs, undefined, 2));
// },(err) => {
//   console.log('unable to fetch the tods', err);
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`count: ${count}`);
// },(err) => {
//   console.log('unable to fetch the tods', err);
// });

db.collection('Users').find({name: 'tamils'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
},(err) => {
  console.log('unable to fetch the tods', err);
});

//db.close(); //find({Completed: true})
});
