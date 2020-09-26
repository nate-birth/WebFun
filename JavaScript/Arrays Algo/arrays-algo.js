var testArr = [6,3,5,1,2,4];
var sum = 0;
var newTestarr = [];
for(var i = 0; i< testArr.length; i++){
    sum = testArr[i] + sum;
    console.log('Num: ', testArr[i], ',', 'Sum: ', sum);
    newTestarr.push(testArr[i] * i);
}
console.log(newTestarr);