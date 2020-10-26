var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');

const port = process.env.PORT || 3000
const address = process.env.SERVER_ADDRESS || "127.0.0.1"

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, address, () => console.log("Server Started. Running on localhost in 3000"))
