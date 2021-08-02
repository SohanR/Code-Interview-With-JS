// as our number increase, the number of operation  increase

// O(n) == big o of n --> linear time.

//big o depend on number of inputs.


const nemo =['nemo']

const everyone = ['dory', 'bruce','marlin','nemo','gill'.'nigel','squirt','darla','hank']

const large = new Array(100000).fill('nemo');


function findNemo(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === 'nemo') {
            console.log('Found NEMO');
        }
        
    }
}

findNemo(large) // O(n) => linear time
