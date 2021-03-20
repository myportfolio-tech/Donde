
const {passCoordinates} = require( '../src/client/js/callAPIs');

test( "Testing autocomplete exists", () => {
    expect(passCoordinates).toBeDefined();
});
