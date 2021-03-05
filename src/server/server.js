const path = require('path');
const express = require('express');
const { json } = require('body-parser');
const app = express();


// CONSTANTS FROM ENVIRONMENT 
const dotenv = require('dotenv').config({path: __dirname+'/./../../.env'});
const port = process.env.PORT


const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
WEATHERBIT_URL = process.env.WEATHERBIT_URL;
GEONAMES = process.env.GEONAMES;
PIXABAY = process.env.PIXABAY;
PIXABAY_URL = process.env.PIXABAY_URL;


// APP Configuration 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../../dist')));
// app.use(favicon(path.join(__dirname, '../client/views', 'favicon.ico')));


app.post('/weather', async (req, res) => {

    const sent_url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${req.body.url}&model=general`;
    console.log(sent_url);
  
  
    await axios
      .get(sent_url)
      .then((data) => {
        console.log('data package', dataPackage);
        res.send(dataPackage);
      })
  
      .catch((error) => {
        console.log('ERROR');
        console.log(error);
      });
  });

app.listen(port, () => console.log(`listening on port ${port}`));