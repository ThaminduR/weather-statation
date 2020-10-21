var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');

const port = process.env.PORT || 3000
const address = process.env.SERVER_ADDRESS || "127.0.0.1"

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, address, () => console.log("Server Started. Running on localhost in 3000"))

// const coap = require('coap')
// var server = coap.createServer()

// server.on('request', function (req, res) {
//   // console.log(req.payload.toString());
//   res.end('Hello NodeMCU ' + req.url.split('/')[1] + '\n')
// })

// server.listen(function () {
//   var req = coap.request('coap://localhost');
//   console.log('Listening on : 5683')

//   req.on('response', function (res) {
//     res.pipe(process.stdout)
//   });

//   req.end()

// })