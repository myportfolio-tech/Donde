

const {geoNamesServices} = require( '../src/server/geonames');
const {processResults} = require( '../src/server/geonames');


test( "Testing geonames exists", () => {
    expect(geoNamesServices).toBeDefined();
});

test( "Testing processResults exists", () => {
    expect(processResults).toBeDefined();
});

