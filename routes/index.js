var express = require('express');
var router = express.Router();
var Airtable = require('airtable');
console.log('api key is', process.env.API_KEY)
var base = new Airtable({apiKey: process.env.API_KEY}).base('appblUmB9PQbUjqlu');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send', (req, res) => {
  console.log('body is', req.body);
  base('formdata').create([req.body], function(err, records) {
    if (err) {
      console.error(err);
      res.send(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
 
  res.send({message: 'Submitted '})
})

module.exports = router;
