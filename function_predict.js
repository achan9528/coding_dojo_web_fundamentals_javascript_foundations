// predict the output

// Exercise 1

// prediction: sets the variable word = "Hello" and then logs "Hello" the the console.

function greeting(){
        return "Hello";
        console.log("World");
    }
var word = greeting();
console.log(word);

// Exercise 2

// prediction: 
// 1. logs "Summing Numbers!", "num1 is: 3", "num2 is: 5" and then 
    // returns 8 to the variable result1

// 2. logs "Summing Numbers!", "num1 is: 4", "num2 is: 7" and then 
    // returns 11 to the variable result2

// 3. logs 8 to the console
// 4. logs 11 to the console

function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

// Exercise 3

// prediction: Doesn't do anything because it is not called. However, when called,
// it will log i until it reaches the value five at which point it will log "High Five!"

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