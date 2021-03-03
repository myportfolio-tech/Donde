require("@babel/register")({
    extends: './.babelrc',
    ignore: [/node_modules/],
  });

import {testDisplay} from './js/display'

export {
    testDisplay
}