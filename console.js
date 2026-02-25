// console.log(2+2);
// console.log(1+2+3+4+5);
// console.log(20-18);
// console.log(10*10);
// console.log(100/4);
// console.log(3>2);
// console.log(3<2);
// console.log(3==3);
// console.log(3==4);

// var results = 50;
// if (results >= 40) {
//     console.log("You passed the exam");
// } else {
//     console.log("You failed the exam");
// }

// if statement is used to perform different actions based on different conditions
// var place = "first";
// if (place == "first") {
//     console.log("You won a gold medal");
// } else if (place == "second") {
//     console.log("You won a silver medal");
// } else if (place == "third") {
//     console.log("You won a bronze medal");
// } else {
//     console.log("Better luck next time");
// }

// stwitch statement is used to perform different actions based on different conditions
// var place = "first";
// switch (place) {
//     case "first":
//         console.log("You won a gold medal");
//         break;
//     case "second":
//         console.log("You won a silver medal");
//         break;
//     case "third":
//         console.log("You won a bronze medal");
//         break;
//     default:
//         console.log("Better luck next time");
// }


// for loop is used to repeat a block of code a certain number of times
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log("Go");

// while loop is used to repeat a block of code as long as a specified condition is true
var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("Happy New Year");


for (var i = 2023; i < 2025; i++) {
    console.log(i);
    for (var j = 6; j < 9; j++) {
        console.log("------------" + j);
    }
}