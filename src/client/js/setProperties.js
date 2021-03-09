
function setPros(googleResponse) 
    {
        const searchInput = document.getElementById('search-box');

        for (const response of googleResponse) 
        {
            if (response.types.includes("locality"))
                {
                    searchInput.setAttribute('data-city', response.long_name);
                }
            if (response.types.includes("administrative_area_level_1"))
                {
                    searchInput.setAttribute('data-state', response.long_name);
                }
            if (response.types.includes("administrative_area_level_2"))
                {
                    searchInput.setAttribute('data-county', response.long_name);
                }
            if (response.types.includes("country"))
                {
                    searchInput.setAttribute('data-country', response.long_name);
                }
            
        };
    }

export { setPros}