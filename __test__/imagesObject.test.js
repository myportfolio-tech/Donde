

const createImagesObject = require('../src/server/imagesObject');
const renderImages = require('../src/client/js/callAPIs');

test( "Testing Images Object exists", () => {
    expect(createImagesObject).toBeDefined();
});


test( "Test Render Images", () => {
    expect(renderImages).toBeDefined();
});

