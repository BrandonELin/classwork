//loop
// for(let i = 0; i<10;i++) {
//     console.log(i);
// }

//exercise 1
// for(let j=10;j>0; j--){
//     console.log(j);
// }

// //exercise 2
// for(let k=0; k<=20; k++) {
//     if (k<10 && k%2!=0) {
//         console.log(k);
//     }
//     if (k>10 && k%2==0) {
//         console.log(k-10);
//     }
// }

// //exercise 3
// for (let m=6; m<=60; m+=3) {
//     console.log(m);
// }

// //exercise 4
// var num = "";
// for (let n=0; n<6; n++) {
//     for (o=0; o<n;o++){
//         num += "#";
//     }
//     console.log(num);
//     num = "";
// }

// //exercise 5
// for(let p=0; p<=10; p++){
//     if (p%2==0){
//         console.log(p);
//     }
// }

// //exercise 6
// var num2 = 0;
// for (let q=1; q<=20; q++){
//     console.log(q);
//     if (q%2==0){
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
//     for (r=q-1; r>1 ;r--) {
//         if (q%r==0){
//             num2++;
//         }
//     }
//     if (num2==0 && q!=1){
//         console.log("prime");
//     }
//     num2 = 0;
// }

// //while loop
// let a = 4;
// while (a<10) {
//     console.log(a);
//     a+=2;
// }
    
//exercise while
let num =3;
// //exercise 1
// while (num<35) {
//     console.log(num);
//     num +=3;
// }

// //exercise 2
// num =5;
// while (num<100) {
//     console.log(num);
//     num +=5;
// }

// //exercise 3
// num =0;
// while (num<=20) {
//     if (num%2==0){
//         console.log(3*num);
//     }
//     num++;
// }

//exercise 4
// num = 2;
// let primeNum = 0;
// let num2 = 0;
// while (num<=20) {
//     primeNum = num - 1;
//     while (primeNum>1){
//         if (num%primeNum==0){
//             num2++;
//         }
//         primeNum--;
//     }
//     if (num2==0){
//         console.log(num);
//     }
//     num2 = 0;
//     num++;
// }

//exercise 5
// num =10;
// let quarters = 0;
// while(num>4){
//     quarters += 4;
//     num--;
// }
// console.log("Nando got " + quarters + " quarters in return.");

//exercise 6
// num = 10;
// while(num<=200) {
//     if (num<100 && num%2!=0) {
//         console.log(num);
//     }
//     if (num>100 && num%2==0) {
//         console.log(num-100);
//     }
//     num += 10;
// }

//exercise 7
// num = 500;
// while(num<=800) {
//     if (num%4==0){
//         console.log(num);
//     }
//     num++;
// }

// //exercise 8
// num = 100;
// diff = 0;
// total = "You will get back ";
// while(num>30){
//     num-=10;
//     diff++
// }
// total += (diff + " ten dollar bills and ");
// diff = 0; 
// while(num>28){
//     num--;
//     diff++
// }
// total += (diff + " dollar bills.");
// diff = 0;
// console.log(total);

// num = 10000;
// let cost = 2728;
// let fifties = 0;
// let twenties = 0;
// let tens = 0;
// let fives = 0;
// let ones = 0;
// let quarters = 0;
// let dimes = 0;
// let nickels = 0;
// let pennies = 0;

// while (num>cost) {
//     if (num>=cost+5000) {
//         num-=5000;
//         fifties ++;
//     } else if (num>=cost+2000) {
//         num-=2000;
//         twenties ++;
//     } else if (num>=cost+1000) {
//         num-=1000;
//         tens ++;
//     } else if (num>=cost+500) {
//         num-=50;
//         fies ++;
//     } else if (num>=cost+100) {
//         num-=100;
//         ones ++;
//     } else if (num>=cost+25) {
//         num-=35;
//         quarters ++;
//     } else if (num>=cost+10) {
//         num-=10;
//         dimes ++;
//     } else if (num>=cost+5) {
//         num-=5;
//         nickels ++;
//     }  else if (num>=cost+1) {
//         num--;
//         pennies ++;
//     }     
// }
// console.log("You will get back " + fifties + " fifty dollar bills, " + twenties + 
//     " twenty dollar bills, " + tens + " ten dollar bills, " + fives + " five dollar bills, " 
//     + ones + " one dollar bills, " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.")

//extra exercise
// for (let i=1; i<=5; i++){
//     let str = '';
//     for (let j=1; j<=i; j++) {
//         str+=j
//     }
//     console.log(str)
// }

// for (let i=5; i>=1; i--){
//     let str = '';
//     for (let j=i; j>=1; j--) {
//         str+=i
//     }
//     console.log(str)
// }

let num3 = 1;
while(num3 <= 5) {
    let str1 =""
    let num4 = 1;
    while(num4 <= num3) {
        str1 += num4
        num4++
    }
    console.log(str1)
    num3++
}

num3 = 5;
while(num3 >= 1) {
    let str1 =""
    let num4 = num3;
    while(num4 >= 1) {
        str1 += num3
        num4--
    }
    console.log(str1)
    num3--
}