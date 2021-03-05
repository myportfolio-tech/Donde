
import {cleanData} from "./cleanData.js"


async function callAPI(urlvalue){

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            url: urlvalue
        })

    }).then(res => res.json()).then(data => {
        console.log((data));
        cleanData(data);
        
        
    });

    return 'Calls Finished';
}




export { callAPI }
