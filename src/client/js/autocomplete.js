

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

           const arrayLength = place.address_components.length;
            for (var i = 0; i < arrayLength; i++) 
            {
                console.log(i)
                console.log(place.address_components[i].long_name);
                console.log(place.address_components[i].types);
                console.log(place.address_components[i].types.includes("locality"))
                console.log(place.address_components[i].types.includes("country"))
                console.log(place.address_components[i].types.includes("administrative_area_level_1"))
            };

            searchInput.setAttribute('data-city', place.address_components[0].long_name);
            searchInput.setAttribute('data-country', place.address_components[3].long_name);


        });

    }



export {activateAutoCompelete}

