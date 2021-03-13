const path = require('path');
const express = require('express');
const { json } = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

//Modules
const CreateSearchItems = require('./pixabay');
const createImagesObject = require('./imagesObject');
const formWeatherObject = require('./weatherObject')
const geoNamesServices = require('./geonames')

// CONSTANTS FROM ENVIRONMENT 
const dotenv = require('dotenv').config({path: __dirname+'/./../../.env'});
const port = process.env.PORT

pixabayURL = `https://pixabay.com/api/?key=20462252-df3c282cc8150591166158d7d&q=granada+spain&image_type=photo`

const WEATHERBIT_KEY = process.env.WEATHERBIT_KEY;
WEATHERBIT_URL = process.env.WEATHERBIT_URL;
GEONAMES = process.env.GEONAMES;
PIXABAY = process.env.PIXABAY;
PIXABAY_URL = process.env.PIXABAY_URL;


// APP Configuration 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'../../dist')));
app.use(cors());

// app.use(favicon(path.join(__dirname, '../client/views', 'favicon.ico')));


app.post('/weather', async (req, res) => {

console.log(req.body)
weather_url = `https://api.weatherbit.io/v2.0/current?lat=${req.body.lat}&lon=${req.body.lng}&units=I&key=${process.env.WEATHERBIT_KEY}`
   
  await axios
       .get(weather_url)
       .then((data) => {        
         res.send(formWeatherObject(data.data));
       })
  
       .catch((error) => {
         console.log('ERROR');
         console.log(error);
       });



    
 });


app.post('/pixabay', async (req, res) => {



// geoNamesServices(req)
// .then((data) =>{
//       console.log('geoNames Response', data);
//     })

const newURL = await geoNamesServices(req);
console.log(newURL);

//   await axios.all([requestOne, requestTwo, requestThree])
//        .then(axios.spread((...data) => {
//         const totalResponseHits = data[0].data.hits.concat(data[1].data.hits).concat(data[2].data.hits);
//         images = createImagesObject(totalResponseHits);
//         res.send(images);

//        }))
  
//        .catch((error) => {
//          console.log('ERROR');
//          console.log(error);
//        });



    
 });



app.listen(port, () => console.log(`listening on port ${port}`));