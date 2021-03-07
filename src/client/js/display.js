import {activateAutoCompelete} from "./autocomplete"


function textDisplay() {
    console.log('Hello - I am display');
    const myCords = activateAutoCompelete()
    console.log(myCords);

}


export { textDisplay }