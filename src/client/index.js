require("@babel/register");

import {passCoordinates, callPixabay, callAllApis, renderImages} from './js/clickGo'
import {activateAutoComplete} from './js/autocomplete'
import {getDepartureDatesfromInput, getReturnDatesfromInput} from './js/getDates'
import {setPros} from './js/setProperties'
import {InnitialCarouselSetUp, setSlidePosition, moveToSlide} from './js/carousel'
import './styles/carousel.css'
import './styles/style.scss'


export {
  passCoordinates,
  callPixabay,
  callAllApis,
  activateAutoComplete,
  getDepartureDatesfromInput,
  getReturnDatesfromInput,
  renderImages,
  setPros,
  InnitialCarouselSetUp,
  setSlidePosition,
  moveToSlide
}