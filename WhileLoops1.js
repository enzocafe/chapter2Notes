
// let b = 25;
// while (0 < b){
//     console.log(b);
//     b++;
// }

// let c = 50;
// while (50 > 0){
//     console.log(c);
//     c++;
// }

// let t = -10;
// while (-10 < 10){
//     console.log(t);
//     t++;
// }

// let n = -50;
// while (-50 < 0){
//     console.log(n);
//     n--;
// }

const readline = answer('readline-sync');

let answer = readline.question("Enter y or  n: ");
while (answer !== "y" && answer !== "n" && answer !=="quit"){
    console.log("invalid choice");
    answer = readline.question("Enter y or n: ");
}
console.log("rest the program");






