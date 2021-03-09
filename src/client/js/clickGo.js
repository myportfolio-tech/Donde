
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
    document.getElementById("one").src = images[0].picture;
    document.getElementById("two").src = images[1].picture;
    document.getElementById("three").src = images[2].picture;
    document.getElementById("four").src = images[3].picture;
    document.getElementById("five").src = images[4].picture;


    }


export { passCoordinates, callPixabay, callAllApis, renderImages}