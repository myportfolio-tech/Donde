

async function activateAutoCompelete()
    {
        const searchInput = document.getElementById('search-box');
        
        const autocomplete = new google.maps.places.Autocomplete(searchInput, 
            {types: ["geocode"],
            fields: ["geometry", "address_components"]
        });
        
        autocomplete.addListener("place_changed", () => {

            const place = autocomplete.getPlace()
            console.log('place ', place)
            const searchInput = document.getElementById('search-box')

            searchInput.setAttribute('data-lng', place.geometry.location.lng());
            searchInput.setAttribute('data-lat', place.geometry.location.lat());
            searchInput.setAttribute('data-city', place.address_components[0].long_name);
            searchInput.setAttribute('data-country', place.address_components[1].long_name);


        });

    }



export {activateAutoCompelete}

