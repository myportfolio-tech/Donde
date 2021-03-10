require("@babel/register");

import {passCoordinates, callPixabay, callAllApis, renderImages} from './js/clickGo'
import {activateAutoComplete} from './js/autocomplete'
import {getDatesfromInput} from './js/getDates'
import {setPros} from './js/setProperties'
import './styles/carousel.css'
import './styles/style.scss'

export {
  passCoordinates,
  callPixabay,
  callAllApis,
  activateAutoComplete,
  getDatesfromInput,
  renderImages,
  setPros
}