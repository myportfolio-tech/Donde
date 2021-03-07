
async function passCoordinates() {
    const inputBox = document.getElementById('search-box');

    
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


export { passCoordinates }