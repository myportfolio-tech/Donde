import { setPros } from "./setProperties";
import { callMainApis } from './callAPIs'


async function activateAutoComplete()
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
            setPros(place.address_components);
            callMainApis()
        });

    }



export {activateAutoComplete}

