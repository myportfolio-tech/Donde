

function getDepartureDatesfromInput(){

const departing = document.getElementById('departure');
let departureDate =  new Date(departing.value);
const today = new Date();

departureDate = new Date(departureDate.getTime() + departureDate.getTimezoneOffset() * 60000)
const daystillTrip = departureDate.getDate() - today.getDate()

const window1 = document.getElementById('window1');
const window2 = document.getElementById('window2'); 


window1.textContent = departureDate;
window2.textContent = daystillTrip;

}



function getReturnDatesfromInput(){

const departing = document.getElementById('departure');
const returning = document.getElementById('return');

//IF Departure Date is not set, set it to today's date
if (! departing.value) {
    let departureDate =  new Date(),
    month = '' + (departureDate.getMonth() + 1),
    day = '' + departureDate.getDate(),
    year = departureDate.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

        departing.value = [year, month, day].join('-');
}



let departureDate =  new Date(departing.value);
let returnDate =  new Date(returning.value);
const today = new Date();

departureDate = new Date(departureDate.getTime() + departureDate.getTimezoneOffset() * 60000)
returnDate = new Date(returnDate.getTime() + returnDate.getTimezoneOffset() * 60000)

const tripLength = returnDate.getDate() - departureDate.getDate()

const window3 = document.getElementById('window3'); 
const window4 = document.getElementById('window4');

window3.textContent = returnDate;
window4.textContent = tripLength;

}


export {getDepartureDatesfromInput, getReturnDatesfromInput}