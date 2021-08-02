//O(1) ==> constant time
//in terms of scalability it doesnt matter how big our inputs are
// we r always going to do the contstant amount of time on a function.

// predictability when it comes to compution is very very nice.

// scalability leve "excellent"



//in this example we can see , no matter how big is our array is. output is constant.
const boxes = [0,1,2,3,4,5]
function logFirstBox(boxes) {
    console.log(boxes[0]);
}

logFirstBox(boxes); // O(1)