import "core-js/stable";
import "regenerator-runtime/runtime";

let geoNamesServices = require( '../src/server/geonames');

const request = {
    body: {
        city: "test1",
        state: "test2",
        country: "test3"
    }
}

const response = [`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=test1+test2&image_type=photo`, 
    `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=test2+test3&image_type=photo`,
    `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=test1+test3&image_type=photo`]



test( "Testing processResults exists", () => {
    expect(geoNamesServices).toBeDefined();
});


test( "Testing URLs ARRAY", async () => {
    const urls = await geoNamesServices(request);
    expect(urls.length).toBe(3);
    expect(urls).toStrictEqual(response);

});



