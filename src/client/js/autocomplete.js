

async function activateAutoCompelete()
    {
        const searchInput = document.getElementById('search-box');
        const autocomplete = new google.maps.places.Autocomplete(searchInput,
            { types: ["geocode"] });
        
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace()
            const coordinates = {lat: place.geometry.viewport.La.i, long: place.geometry.viewport.Ra.i};
            console.log( coordinates) ;

        });

    }



export {activateAutoCompelete}