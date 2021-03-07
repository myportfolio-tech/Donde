

async function activateAutoCompelete()
    {
        const searchInput = document.getElementById('search-box');
        
        const autocomplete = new google.maps.places.Autocomplete(searchInput, 
            {types: ["geocode"]});
        
        autocomplete.addListener("place_changed", () => {

            const place = autocomplete.getPlace()
            const searchInput = document.getElementById('search-box')

            searchInput.setAttribute('data-lng', place.geometry.location.lng());
            searchInput.setAttribute('data-lat', place.geometry.location.lat());


        });

    }



export {activateAutoCompelete}