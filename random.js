function getRandomNumber(upper) {
    var randomNumber = Math.floor(Math.random() * upper) + 1;
    return randomNumber;
}
/*
console.log(getRandomNumber(6));
console.log(getRandomNumber(100));
console.log(getRandomNumber(1000));
*/
function getArea(width, lenght, unit) {
    var area = width * lenght;
    return area + unit;
}
console.log(getArea(10,20, ' sq ft'));