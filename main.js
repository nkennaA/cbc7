//conditional
//exercise 1
var i = 2;
i += 5;
i *= 2;
console.log(i);
i = i%3;
//expecting 2
console.log(i);
i = i%2;
console.log(i);
//expected 0, got 0

//exercise 2 
if (i%2 === 0) {
    console.log(i + " mod 2 is 0");
//exercise 3
} else {
    console.log("variable not even");
}
//exercise 4
if (i%3 === 1 || i*3 === 1) {
    console.log("your math doesnt make sense");
} else if (i+2 === 3 && i-2 === 3) {
    console.log("your math is absolutely nonsensical");
} else if (!i && i) {
    console.log("It's not your math, your computer is just busted");
} else {
    console.log("congrats, your math makes sense");
}
//exercise 5
if (i+2 === 2) {
    console.log("0 + 2 is indeed 2");
}
if (i+3 === 3) {
    console.log("0 + 3 is indeed 3");
}
if (i+4 === 4) {
    console.log("0 + 4 is indeed 4");
}

/* writing 3 if statements versus using else if makes the computer check all
the conditions, wheereas using else if makes the computer stop once all the
conditions are met
*/

//loops
//exercise 1 and 2
for (j = 0; j < 50; j++) {
    console.log(j);
}

//exercise 3
var k = 0;
// in CS terms 'up until' usually means do not include, you said log up until
// 50, so this loop wont include 50
while (k < 50) {
    console.log(k);
    k += 2;
}

//exercise 4
for(j = 0; j < 100; j++) {
    if (j%3 === 0 && j%5 === 0) {
        console.log("fizzbuzz");
    } else if (j%3 === 0) {
        console.log("fizz");
    } else if (j%5 === 0) {
        console.log("buzz");
    }
}

//functions

//exercise 1
function addNumbers(num1, num2) {
    return num1 + num2;
};

//exericse 2
function multiplyNumbers(num1, num2) {
    return num1 * num2;
};

//exercise 3
function printNumbersBetween(num1, num2) {
    for(j = num1; j < num2; j++) {
        console.log(i);
    }
};

//exercise 4
const myGlobalVar = 1400;
function addToGlobalVar(number) {
    var returnedNumber = myGlobalVar + number;
    console.log(returnedNumber);
    return returnedNumber;
};
addToGlobalVar(1600);
//exercise 5
(function() {
    console.log("You have made an IIFE");
})();

//exercise math
function randomNumberCheck(number) 
{
    document.getElementById("myNumber").value = "";
    var randNum = Math.floor(Math.random() *9)+1;
    if(number < 1 || number > 10) {
        console.log( "Enter a number between 1 and 10!");
        return;
    }
    if(number == randNum) {
        console.log( "Congratulions, you guessed my number");
        return;
    }
    console.log("Sorry, my number was " + randNum);
    return;
}

document.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        var num = document.getElementById("myNumber").value;
        console.log(num);
        console.log("entered");
        randomNumberCheck(num);
    }
});