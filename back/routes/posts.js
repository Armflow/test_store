var express = require('express');
var router = express.Router();

//==================================
// const Schema = mongoose.Schema;
// const CandiesSchema = new Schema({
//   id: Number,
//   ordered: String,
//   name: String,
//   price: Number,
//   img: String,
//   btnTitle: String
// }, { collection : 'candies' });
// const Candy = mongoose.model('Candy', CandiesSchema);
//==================================

// router.get('/', (req, res) => {
//     Candy.find({  })
//     .then((data) => {
//         console.log('Data: ', data);
//         res.json(data);
//     })
//     .catch((error) => {
//         console.log('error: ', error);
//   });
// })

module.exports=router;

// //Insert Data into collection
// MongoClient.connect(MONGODB_URI, function(err,db){
//   if (err) throw err;
//   var dbo = db.db('plastic_0');
//   var candies = [
//     {id: 1, ordered: false, name: 'Peanut', price: 2, img: './img_src/1.jpg', btnTitle: 'Add to Basket' },
//     {id: 2, ordered: false, name: 'Milk Chocolate', price: 5, img: './img_src/2.jpg', btnTitle: 'Add to Basket' },
//     {id: 3, ordered: false, name: 'Almond', price: 5, img: './img_src/3.jpg', btnTitle: 'Add to Basket' },
//     {id: 4, ordered: false, name: 'Dark Chocolate', price: 8, img: './img_src/4.jpg', btnTitle: 'Add to Basket' },
//     {id: 5, ordered: false, name: 'Peanut Butter', price: 7, img: './img_src/5.jpg', btnTitle: 'Add to Basket' },
//     {id: 6, ordered: false, name: 'Pretzel', price: 8, img: './img_src/6.jpg', btnTitle: 'Add to Basket' },
//     {id: 7, ordered: false, name: 'Peanut Butter', price: 8, img: './img_src/7.jpg', btnTitle: 'Add to Basket' },
//     {id: 8, ordered: false, name: 'White Chocolate', price: 8, img: './img_src/8.jpg', btnTitle: 'Add to Basket' }
//   ];
//   dbo.collection('candies').insertMany(candies, function(err, res) {
//     if (err) throw err;
//     console.log('Successfuly inserted lines: ' + res.insertedCount);
//     db.close();
//   })
// })

// //Fetch Data from collection - working
// app.get('/api', function(req, res) {
// MongoClient.connect(MONGODB_URI, function(err, db) {
//   if (err) throw err;
//   console.log('Backend connected. Fetching data...');
//   var dbo = db.db("plastic_0");
//   dbo.collection("candies").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log('Successfuly fetched ' + result.length + ' lines.');
//       res.json(result);
//       db.close();
//     });
//   });
// });