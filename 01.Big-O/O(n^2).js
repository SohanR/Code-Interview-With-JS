//log all pairs of array

const boxes = ['A', 'B', 'C', 'D', 'E'];

function pairs(array) {
    for (let i = 0; i < array.length; i++) { //O(n)
       for (let j = 0; j < array.length; j++) { // O(n)
           console.log(array[i] , array[j]);           
       }        
    }
}

pairs(boxes)

// O(n) * O(n)  multiply bcz of nested

// so O(n*n) ==> O(n^2)  Quadratic time