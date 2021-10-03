//margeSortedArrays([0,3,4,31],[4,6,30])
// [ 0,3,4,4,6,30,31 ]


const margeSortedArrays = (array1,array2) => {
    
    const margedArray = [];

    arrayItem1 = 0;
    arrayItem2 = 0;

    while( arrayItem1 < array1.length && arrayItem2 < array2.length ){

        if ( array1[arrayItem1] < array2[arrayItem2] ) {
            margedArray.push(array1[arrayItem1]);
            arrayItem1++;
        }
        else{
            margedArray.push(array2[arrayItem2]);
            arrayItem2++;
        }
    }



    while ( arrayItem1 < array1.length ) {
        margedArray.push( array1[arrayItem1] )
        arrayItem1++;
    }

    while ( arrayItem2 < array2.length ) {
        margedArray.push( array2[arrayItem2] )
        arrayItem2++;
    }


    return margedArray;
}




console.log( margeSortedArrays([0,3,4,31],[4,6,30]))
