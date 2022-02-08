const power = ( base, exponent ) => {
    let result = 1;

    for(let count = 0; count < exponent; count++){
        result *= base;
    }

    return result;
}