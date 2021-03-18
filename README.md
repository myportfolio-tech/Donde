# Donde - Travel App
## Udacity Capstone Project

The app is for a user to search for any location and see weather information and images of the location. 


---
---


## APIs Workflow

The autocomplete search box is powered by Google [Place Autocomplete](https://developers.google.com/maps/documentation/places/web-service/autocomplete?hl=id) API.

The autocompleted location values are used to make serveral calls:

* Images: [Pixabay API](https://pixabay.com/api/docs/)

* Weather: [Weatherbit API](https://www.weatherbit.io/api)


* Country Information: [GeoNames API](http://www.geonames.org/export/web-services.html)

    This API is called when the user input **is not** in the form of city, state, contry, for example, they sarch for "Spain".
    
    We call it with the country code and find cities within the country.
    
    These cities are then userd, along with the country, to query Pixabay.




---
---

## Javascript 
   ### Server Side

Module: geonames.js

Module: imagesObject.js

Module: weatherObject.js




<div class="text-purple">
  This text is purple, <a href="#" class="text-inherit">including the link</a>
</div>




```javascript


         ```