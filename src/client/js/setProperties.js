
function setPros(googleResponse) 
    {
        const searchInput = document.getElementById('search-box');
        const arrayLength = googleResponse.length;
        for (var i = 0; i < arrayLength; i++) 
        {
            if (googleResponse[i].types.includes("locality"))
                {
                    searchInput.setAttribute('data-city', googleResponse[i].long_name);
                }
            if (googleResponse[i].types.includes("administrative_area_level_1"))
                {
                    searchInput.setAttribute('data-state', googleResponse[i].long_name);
                }
            if (googleResponse[i].types.includes("administrative_area_level_2"))
                {
                    searchInput.setAttribute('data-county', googleResponse[i].long_name);
                }
            if (googleResponse[i].types.includes("country"))
                {
                    searchInput.setAttribute('data-country', googleResponse[i].long_name);
                }
            
        };
    }

export { setPros}