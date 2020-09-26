var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}
// 8, 6, 7, 5, 3, 0, 9



var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
        // if the number is even then post the number
    } 
    else{
        console.log("That is odd!");
        // otherwise post "That is odd!"
    }
}
// That is odd!, That is odd!, 8, 4, 2, 0, That is odd!


var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
        // this is pushing any negative number to the new array and then making it positive in the original
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
        // If the entry is 0 change it to the string 'Zero'
    }
    else{
        arr[i] = arr[i] * -1;
        // If the number is not negative or 0 then make it negative in arr
    }
}
console.log(arr);
console.log(newArr);

// [-1, -3, -8, 5, "Zero", 2, -4, 1], [-5, -2, -1]