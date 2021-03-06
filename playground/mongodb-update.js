// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'gentur', age: 25};
// var {name}  = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:  new ObjectID('5a8596ec74288323d49e590d')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{(
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a8116f779b6ec1b28337f57')
  }, {
    $set: {
      name: 'Gentur Ariyadi'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: 'Gentur'
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
