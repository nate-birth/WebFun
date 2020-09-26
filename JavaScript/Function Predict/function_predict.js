function greeting(){
    return "Hello";
    // This return ends the function
    console.log('World')
}
var word = greeting();
console.log(word);
// Hello


function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
// this runs first
var result2 = add(4,7);
// this runs second
console.log(result1);
// this runs third
console.log(result2);

// Summing Numbers!
// num1 is: 3
// num2 is: 5
// Summing Numbers!
// num1 is: 4
// num2 is: 7
// 8
// 11


function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
// This wont return anything as there is no call for the function to run