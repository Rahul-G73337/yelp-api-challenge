//Require module
const express = require('express');
// Express Initialize
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );
var cors = require('cors')
const yelp = require('yelp-fusion');
const client = yelp.client('Ldc1ky8DlUVoXMZiYvkvkRFlz9MSXVzcPZKjR6TyMKdMW20-WvzSPmR1vIdbX7kp5s3qMwIfecWqfiKF21duvBWIdhtL3hdEfs3CHj0npww1j7479bAea-JrsJGUYXYx');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

app.post("/getBusiness", (req, res) => {
  client.search({
    term: req.body.term,
    location: req.body.location,
  }).then(response => {
    res.send(response);
  }).catch(e => {
    console.log(e);
    throw new Error(e);
  });
});

app.post("/getReviews", (req, res) => {
  client.reviews(req.body.id).then(response => {
    // console.log(response);
    res.send(response);
  }).catch(e => {
    console.log(e);
    throw new Error(e);
  });
});
app.post("/getResults", (req, res) => {
  client.autocomplete({
    text: req.body.id
  }).then(response => {
    // console.log(response);
    res.send(response);
  }).catch(e => {
    console.log(e);
    throw new Error(e);
  });
});

app.listen(port,()=> {
  console.log('listen port 3000');
})

