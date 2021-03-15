
import {InnitialCarouselSetUp} from './carousel'

async function passCoordinates() {
    const inputBox = document.getElementById('search-box');



    console.log(inputBox.dataset.lng);
    console.log(inputBox.dataset.lat);


    
    fetch('http://localhost:5000/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            lng: inputBox.dataset.lng,
            lat: inputBox.dataset.lat
        })

    }).then(res => res.json()).then(data => {
        renderWeather(data);
        
        
        
    });
}



async function callPixabay() {
    const inputBox = document.getElementById('search-box');
    console.log('Calling Pixabay')

    fetch('http://localhost:5000/pixabay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            lng: inputBox.dataset.lng,
            lat: inputBox.dataset.lat,
            city: inputBox.dataset.city,
            county: inputBox.dataset.county,
            state: inputBox.dataset.state,
            country: inputBox.dataset.country,
            code: inputBox.dataset.countrycode
        })

    }).then(res => res.json()).then(data => {
        
        console.log((data));
        renderImages(data); 
        
    });
}


function callMainApis()
    {
        passCoordinates();
        callPixabay()
    }



function renderImages(images)
    {

    const holder = document.getElementById("carousel__track");
    while (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

    
    for (const image of images) 
        {
            let listItem = document.createElement('li');
            listItem.classList.add('carousel__slide');
            let imgItem = document.createElement('IMG');
            
            // Property used for lazy loading
            imgItem.setAttribute('data-src', image.pictureURL);
            imgItem.setAttribute('data-author', image.author);
            imgItem.setAttribute('data-tags', image.tags);

            imgItem.classList.add('carousel__image')
            listItem.appendChild(imgItem);

            holder.appendChild(listItem);

        }

        holder.firstChild.classList.add('current-slide')
        InnitialCarouselSetUp();
    }



function renderWeather(weather){
    
    const label = document.getElementById("weather-time");
    label.style.display = "block";

    const iconImage = document.getElementById("icon-image");
    const description = document.getElementById("description");
    const temp = document.getElementById("temp");
    const wind = document.getElementById("wind");


    iconImage.innerHTML = `<img src="${weather.iconUrl}" alt="">`
    description.innerHTML = weather.description
    temp.innerHTML = `${weather.temp} &#8457;`
    wind.innerHTML = `wind at ${weather.wind} m/h`

}

export { passCoordinates, callPixabay, callMainApis, renderImages, renderWeather}
