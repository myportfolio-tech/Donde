require("@babel/register");

import {passCoordinates, callPixabay, callMainApis, renderImages, renderWeather} from './js/callAPIs'
import {activateAutoComplete} from './js/autocomplete'
import {getDepartureDatesfromInput, getReturnDatesfromInput, setDatesMins} from './js/getDates'
import {setPros} from './js/setProperties'
import {InnitialCarouselSetUp, setSlidePosition, moveToSlide} from './js/carousel'
import './styles/carousel.css'
import './styles/style.scss'



export {
  passCoordinates,
  callPixabay,
  callMainApis,
  activateAutoComplete,
  getDepartureDatesfromInput,
  getReturnDatesfromInput,
  renderImages,
  renderWeather,
  setPros,
  InnitialCarouselSetUp,
  setSlidePosition,
  moveToSlide,
  setDatesMins
}