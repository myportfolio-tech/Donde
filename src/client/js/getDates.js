

function getDatesfromInput(){
const departing = document.getElementById('departure');
const returning = document.getElementById('return');



let departureDate =  new Date(departing.value);
let returnDate =  new Date(returning.value);
const today = new Date();

departureDate = new Date(departureDate.getTime() + departureDate.getTimezoneOffset() * 60000)
returnDate = new Date(returnDate.getTime() + returnDate.getTimezoneOffset() * 60000)

const tripLength = returnDate.getDate() - departureDate.getDate()
const daystillTrip = departureDate.getDate() - today.getDate()

console.log('Departing: ', departureDate);
console.log('Returning: ', returnDate);
console.log('Today is :', today);
console.log(tripLength);
console.log(daystillTrip);


}


export {getDatesfromInput}