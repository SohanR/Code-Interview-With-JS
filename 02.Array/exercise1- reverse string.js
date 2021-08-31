//  create a function that reverse a string
// ' i am sohan' should be: 
// 'nahos ma i'

function reverse(str){
    // checking input
    if (!str || str.length < 2 || typeof str !== 'string' ){
        return console.log('invalid input')
    }


    const backwards = [];
    const totalItem = str.length - 1;

    for(let i = totalItem; i >= 0; i--){
        backwards.push(str[i])
    } 
    console.log(backwards)

    return console.log(backwards.join(''));
}

reverse('i am sohan')