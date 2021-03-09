function getRandomNumber(upper, lower) {
    if (isNaN(lower) || isNaN(upper)){
        throw new Error('Both arguments must be numbers');
    }
    var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
}

console.log(getRandomNumber(10,8));
console.log(getRandomNumber(100,8));
console.log(getRandomNumber("nine",8));
// console.log(getRandomNumber(100));
// console.log(getRandomNumber(1000));

/*function getArea(width, lenght, unit) {
    var area = width * lenght;
    return area + unit;
}
console.log(getArea(10,20, ' sq ft')); */
