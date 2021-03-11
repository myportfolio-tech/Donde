
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
        console.log((data));
        
        
        
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
            city: inputBox.dataset.city,
            county: inputBox.dataset.county,
            state: inputBox.dataset.state,
            country: inputBox.dataset.country
        })

    }).then(res => res.json()).then(data => {
        
        console.log((data));
        renderImages(data); 
        
    });
}


function callAllApis()
    {
        passCoordinates();
        callPixabay();
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
            imgItem.src = image.pictureURL
            imgItem.classList.add('carousel__image')
            listItem.appendChild(imgItem);

            holder.appendChild(listItem);

        }

        holder.firstChild.classList.add('current-slide')
        InnitialCarouselSetUp();
    }


export { passCoordinates, callPixabay, callAllApis, renderImages}
