// Get 1 to 255
function twofiftyfive(num){
    var arr = [];
    for(var i=1; i<=num; i++){
        arr.push(i);
    }
    return arr;
}
console.log(twofiftyfive(255));

// Get even 1000
function evens(num2){
    var sum = 0;
    for(var i=1; i<=num2; i++){
        if(i % 2 == 0){
            sum = i+sum;
        }
    }
    return sum;
}
console.log(evens(1000));

// Sum odd 5000
function odds(num3){
    var sum = 0;
    for(var i=1; i<=num3; i++){
        if(i % 2 == 1){
            sum = i+sum;
        }
    }
    return sum;
}
console.log(odds(5000));

// Iterate an array
function iterate(array){
    var sum = 0;
    for(var j = 0; j < array.length; j++ ){
        sum += array[j];
    }
    return sum;
}
console.log(iterate([-5,2,5,12]));

// Find max
function findmax(array2){
    var max = array2[0];
    for(var m = 0; m < array2.length; m++){
        if(max <= array2[m]){
            max = array2[m];
        }
    }
    return max;
}
console.log(findmax([-100, -25, -150, -4]));

// Find Average
function average(array3){
    var sum = 0;
    for(var j = 0; j < array3.length; j++ ){
        sum += array3[j];
    }
    return sum / array3.length;
}
console.log(average([1,3,5,7,20]));

// Array odd
function odd(num4){
    var newarray = [];
    for(var i = 0; i <= num4; i++ ){
        if(i % 2 !== 0){
            newarray.push(i);
        }
    }
    return newarray;
}
console.log(odd(50));

// Greater than Y
function greater1(y, arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(y < arr[i]){
            newarr.push(arr[i]);
        }
    }
    return newarr.length;
}
console.log(greater1(3, [1, 3, 5, 7]));

// Squares
function squares(arr){
    for(var s = 0; s < arr.length; s++){
        arr[s] = arr[s] ** 2;
    }
    return arr;
}
console.log(squares([1,5,10,-2]));

// Negatives
function neg(arr1){
    for(var x = 0; x < arr1.length; x++){
        if(arr1[x] < 0){
            arr1[x] = 0; 
        }
    }
    return arr1;
}
console.log(neg([-51,5,-19,-200]));

// Max/Min/Avg
function mma(arr2){
    var sum = 0;
    var max = arr2[0];
    var min = arr2[0];
    for(var i = 0; i < arr2.length; i++){
        if(arr2[i] > max){
            max = arr2[i];
        }
        if(arr2[i] < min){
            min = arr2[i];
        }
        sum += arr2[i];
    }
    return [max, min, sum / arr2.length];
}
console.log(mma([1,5,10,-2]));

// Swap Values
function swap(arr3){
    var temp = [];
    for(var i = 0; i < arr3.length; i++){
        temp.push(arr3[i]);
    }
    temp[0] = arr3[arr3.length -1];
    temp[temp.length - 1] = arr3[0];
    return temp;
}
console.log(swap([-5,2,5,12]));

// Number to String
function neg2(dojo){
    for(var t = 0; t < dojo.length; t++){
        if(dojo[t] < 0){
            dojo[t] = 'Dojo'
        }
    }
    return dojo;
}
console.log(neg2([-51,5,-19,-200]))