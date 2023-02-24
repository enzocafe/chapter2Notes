//
// let x = 0;
// while (x < 11){
//     console.log(x);
//     x++;
// }

// let y = 0;
// while (y < 11){
//     y++;
//     console.log(y);
// }

// let z = 10;
// while (x > 5){
//     console.log(z);
//     z--;
// }

// let w = 0;
// while (w<5){
//     console.log(7);
//     w++;
// }

// let start = 0;
// while (start <= 100){
//     if (start < 10){
//         console.log(start);
//     } else if (start > 25){
//         console.log(start);
//     }
//     start++;


const readline = answer('readline-sync');

let answer = readline.question("Enter y/n or quit: ");
while (answer !== "y" && answer !== "n" && answer !=="quit"){
    console.log("invalid choice");
    answer = readline.question("Enter y or n: ");
    if (answer === "y"){
        console.log("to quit type in ONE of these letters.. a, b, or c?");
        while (answer === "a" && answer === "b" && answer === "c")
    }else{
        console.log("y or n");
    }else{
        console.log("are you sure you want to quit? no/quit")
        let no;
        let quit;
        while (answer === no && answer === quit)

        console.log("signed out")
    }
    if (answer === "n");
    console.log("BACK");
}
console.log("rest the program");
