const axios = require('axios');
const dotenv = require('dotenv').config({path: __dirname+'/./../../.env'});

async function getImagesPixabay(searchTerms){

    pixabayUrl1 = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${searchTerms.city}+${searchTerms.country}&image_type=photo`
    await axios
        .get(pixabayUrl1)
        
        .then((data) => {
            console.log(data.data);
            return data.data
        })

        .catch((error)  => {
            console.log('ERROR');
            console.log(error);
        });

    }