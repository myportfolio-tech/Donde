
//This functions ensures that the data items in the serach box are cleared
// from the previous entry and the new data values are set

function setPros(googleResponse) 
    {
        const searchInput = document.getElementById('search-box');
        
        searchInput.setAttribute('data-city', '');
        searchInput.setAttribute('data-state', '');
        searchInput.setAttribute('data-county', '');
        searchInput.setAttribute('data-country', '');

        for (const response of googleResponse) 
        {   
            //city
            if (response.types.includes("locality"))
                {
                    searchInput.setAttribute('data-city', response.long_name);
                }

            
            //State
            if (response.types.includes("administrative_area_level_1"))
                {
                    searchInput.setAttribute('data-state', response.long_name);
                }

                
            //County
            if (response.types.includes("administrative_area_level_2"))
                {
                    searchInput.setAttribute('data-county', response.long_name);
                }

            //Country
            if (response.types.includes("country"))
                {
                    searchInput.setAttribute('data-country', response.long_name);
                }

        };
    }

export { setPros}