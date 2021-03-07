
function activateAutoCompelete()
    {
        const searchInput = document.getElementById('search-box');
        console.log(searchInput);
        const autocomplete = new google.maps.places.Autocomplete(searchInput);
    }



export {activateAutoCompelete}