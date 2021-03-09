
async function passCoordinates() {
    const inputBox = document.getElementById('search-box');
    console.log(inputBox.dataset.lng);
    console.log(inputBox.dataset.lat);
    console.log(inputBox.dataset.city);
    console.log(inputBox.dataset.country);
    
    fetch('/call', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            lng: inputBox.dataset.lng,
            lat: inputBox.dataset.lat,
            city: inputBox.dataset.city,
            country: inputBox.dataset.country

        })

    }).then(res => res.json()).then(data => {
        console.log((data));
        
        
        
    });
}



async function callPixabay() {
    const inputBox = document.getElementById('search-box');
    console.log('Calling Pixabay')
    
    fetch('/pixabay', {
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
        //passCoordinates();
        callPixabay();
    }



// function renderImages(images)
//     {
//     const holder = document.getElementById("image-holder");
//     while (holder.firstChild) {
//         holder.removeChild(holder.firstChild);
//     }

//     const arrayLength = images.length;
//     for (var i = 0; i < arrayLength; i++) 
//         {
//             let imgItem = document.createElement('IMG');
//             console.log(imgItem)
//             imgItem.src = images[i].pictureURL
//             holder.appendChild(imgItem);
//         }
//     }


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

            holder.appendChild(imgDiv);

        }
    }


export { passCoordinates, callPixabay, callAllApis, renderImages}
