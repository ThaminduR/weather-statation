var express = require('express');
var router = express.Router();

var parseString = require('xml2js').parseString;

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cap-submit', function (req, res, next) {
  console.log(req.body);
  parseString(req.body, function (err, result) {
    if (err) {
      console.log(JSON.stringify(err, null, 2));
      res.status(400).send();
    } else {
      console.log(JSON.stringify(result, null, 2));
      res.status(200).end();
    }
    console.log("\n\n\n\n\n")
  });
});

module.exports = router;
