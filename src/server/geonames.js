
const axios = require('axios');
const dotenv = require('dotenv').config({path: __dirname+'/./../../.env'});
const username = process.env.GEONAMES


async function geoNamesServices(req){

    // If the orginal request is only country
    //we'll capp the API to get cities in that country
    
    if (req.body.city == '' || req.body.state == ''){
    geoURL = `http://api.geonames.org/searchJSON?country=${req.body.code}&maxRows=10&&username=${username}`
    // console.log(geoURL)
    
    const geoResponse = await axios.get(geoURL)
    const cities = processResults(geoResponse.data.geonames);
    console.log('CITIES', cities);
        
    return [`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${cities.capital}+${req.body.country}&image_type=photo`, 
            `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${cities.secondCity}+${req.body.country}&image_type=photo`]



}
    else {
        return [
        `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.city}+${req.body.state}&image_type=photo`, 
        `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.body.city}+${req.body.country}&image_type=photo`]}
    
}       



// This functions parses through the geoName results to find cities in the country
function processResults(geoNamesResponse){

    const cities = {capital: null, secondCity: null};

    for (const location of geoNamesResponse){

        if (location.fclName == 'city, village,...' && location.fcodeName == 'capital of a political entity'){
            cities.capital = location.name.split(' ').join('%20');
            continue;
        }

        if (location.fclName == 'city, village,...' && location.fcodeName != 'capital of a political entity'){
            cities.secondCity = location.name.split(' ').join('%20');
            continue;
        }
        
        if (cities.capital != null && cities.secondCity != null) {
            break;
        }

    }

    return  cities

}



module.exports = geoNamesServices;