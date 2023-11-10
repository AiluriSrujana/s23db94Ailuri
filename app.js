var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchresultsRouter = require('./routes/searchresults');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

require('dotenv').config();
const connectionString =process.env.MONGO_CON
console.log("Connection String *********** ", connectionString);

//mongoose.connect(connectionString);
mongoose.connect("mongodb+srv://Alnrvlprsr123:Alnrvlprsr123@atlascluster.lz7m3a2.mongodb.net/?retryWrites=true&w=majority");


//Get the default connection
 var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

//const mongoose = require("mongoose")




var searchresults = require("./models/searchresults");

// We can seed the collection if needed on server start
//async function recreateDB(){
// Delete everything
/*await searchresults.deleteMany();
let instance1 = new
searchresults({name:"vegNuggets", size:'medium',
price:20});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}*/

//We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await searchresults.deleteMany();
  let instance1 = new searchresults({
    name: "cabbageNuggets",
    size: 'Medium',
    price: 20
  });
  instance1.save().then(doc=>{
    console.log("First object saved")
  }).catch(err=>{
    console.error(err)
  })

 
  let instance2 = new searchresults({
    name: "PotatoNuggets",
    size: 'Large',
    price: 30
  });
  instance2.save().then(doc=>{
    console.log("Second object saved")
  }).catch(err=>{
    console.error(err)
  })
 
  let instance3 = new searchresults({
    name: "CarrotNuggets",
    size: 'Small',
    price: 15
  });
  instance3.save().then(doc=>{
    console.log("Third object saved")
  }).catch(err=>{
    console.error(err)
  })
}
let reseed = true;
if (reseed) { recreateDB(); }

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/searchresults',searchresultsRouter);
app.use('/board',boardRouter);
app.use('/choose',chooseRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;