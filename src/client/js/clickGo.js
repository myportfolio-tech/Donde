
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
    const holder = document.getElementById("image-holder");
    while (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

    const arrayLength = images.length;
    for (var i = 0; i < arrayLength; i++) 
        {
            let imgDiv = document.createElement('div');
            
            let imgItem = document.createElement('IMG');
            imgItem.src = images[i].pictureURL
            imgDiv.appendChild(imgItem);
            
            let authorDiv = document.createElement('div');
            authorDiv.innerText = images[i].author
            imgDiv.appendChild(authorDiv);

            let imgTags = document.createElement('div');
            imgTags.innerText = images[i].tags
            imgDiv.appendChild(imgTags);

            holder.appendChild(imgDiv);

        }
    }


export { passCoordinates, callPixabay, callAllApis, renderImages}
