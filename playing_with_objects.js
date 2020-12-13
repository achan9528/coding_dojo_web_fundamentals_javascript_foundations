
// Imagine that you are given an array of objects.  For example,

// How would you print/log John's age? 
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this
    // Michael - 37
    // John - 30
    // David - 27

var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

// print John's age
console.log(users[1].age);

// print the name of the first object
console.log(users[0].name);

// print each users's name and age
for (var i = 0; i < users.length; i++){
    console.log(users[i].name + " - " + users[i].age);
}