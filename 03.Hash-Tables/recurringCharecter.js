// return the first recurring character from given array

// an array = [2,5,1,2,3,5,1,2,4]
// it should return 2

// an array = [2,1,1,2,3,5,1,2,4]
// it should return 1

// an array = [2,3,4,5]
// it should return undefined


// common approach
const firstRecurringCharacter = (input) =>{
    for (let i = 0; i < input.length; i++){
        for (let j = i + 1; j < input.length; j++){
            if(input[i] === input[j]){
                return input[i]
            }
        }
    }

    return undefined
}



console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))


// using hash table

const firstRecurringCharacter2 = (input) =>{
    let map = {}

    for(let i = 0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }else{
            map[input[i]] = i
        }
    }

    console.log(map);
    return undefined
}


console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));