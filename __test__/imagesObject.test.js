

import {createImagesObject} from '../src/server/imagesObject';
const {testFunction} = require('../src/server/throwaway');
const {renderImages} = require('../src/client/js/callAPIs');

test( "Testing Images Object exists", () => {
    expect(createImagesObject).toBeDefined();
});

test( "Test Function", () => {
    expect(testFunction).toBeDefined();
});


test( "Test Render Images", () => {
    expect(renderImages).toBeDefined();
});

