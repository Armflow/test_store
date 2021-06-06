var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const router = express.Router();
const Candy = require('./models/candyModel')
var app = express();
//const dbConn = require('./routes/posts')
const MongoClient = require('mongodb').MongoClient;

// Mongoose connection
const MONGODB_URI = 'mongodb+srv://plastic_0:Bora2001@cluster0.hh0et.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoose = require('mongoose');

//Prevent blocking by CORS policy
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'plastic_0'
});

const db = mongoose.connection;

// Check for DB connection
db.once('open', function(){
  console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
  console.log('error connecting DB!');
});

//Get data from MongoDB
app.get('/api', (req, res) => {
  Candy.find({},{ _id: false })
  .then((data) => {
      res.json(data);
  })
  .catch((error) => {
      console.log('error: ', error);
  });
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/routes', dbConn);
app.use('/models', Candy);

//Route for home
app.get('/', function (req, res) {
  res.send('!לך הביתה ילד אין פה במבא')
});

module.exports = app;
