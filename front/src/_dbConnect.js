
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://plastic_0:Bora2001@cluster0.hh0et.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("plastic_0").collection("candies");
  // perform actions on the collection object
  client.close();
});

// fetch('http://localhost:9000/api', {
    //   // mode: 'no-cors',
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // },)
    // .then(response => {
    //   if (response.ok) {
    //     response.json().then(json => {
    //       this.setState({candies: json});
    //       this.setState({backResponse: 'state: changed in fetch'});
    //     });
    //   }
    //});

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
 
mongoClient.connect(function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
    let user = {name: "Tom", age: 23};
    collection.insertOne(user, function(err, result){
          
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});