const express = require('express');
const app = express();
app.use(express.static('dist'))

const path = require('path')
const fetch = require("node-fetch");

const cors = require('cors')
app.use(cors()) // Use it as the middleware

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dotenv = require('dotenv');
dotenv.config();
const key = process.env.key;
const baseURL = process.env.baseURL;

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/postMeaningApi', async function (req, res) {
  const input = req.body.text;
  const reqApi = await fetch(baseURL+key+input);
  let data = await reqApi.json();
  console.log(data);
    const meaning = {
    'text': data.sentence_list[0]['text'],
    'polarity': data.score_tag,
    'subjectivity': data.subjectivity,
    'agreement': data.agreement,
    'irony': data.irony,
    'confidence': data.confidence
    }
  res.send(meaning);
})

