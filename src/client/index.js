require("@babel/register");

import {passCoordinates, callPixabay, callAllApis, renderImages} from './js/clickGo'
import {activateAutoCompelete} from './js/autocomplete'
import {getDatesfromInput} from './js/getDates'

export {
  passCoordinates,
  callPixabay,
  callAllApis,
  activateAutoCompelete,
  getDatesfromInput,
  renderImages
}