// BrainStation; Assignment 2
// Part A

// My fist attempt at this assignment, I used an array in an attempt to recreate the image..
                    // var t = [ ];
                    // while (t.length < 7) {
                    //     t.push('#');
                    //     console.log(t);
                    // }
//Thought it did work at adding a hash at each interval to create a triangle like shape until the bottom number hit the 7 mark. It looked clunky and awakard. 

// So I tried with a string instead of an array (*closest I could get*)

 var trig = " "
 while (trig.length <=7 ) {
    trig = trig + '#';
     console.log(trig);
}

//It worked! A hash is added to the trig variable each loop until the total length is equal to 7 and the console comand prints the string each round before running the code again.

//But the hint at the bottom of the page has a for loop not a while loop. Hmm.
                        // var tang = "";
                        // for (i=0; i < 7 ; i++){
                        //     tang= i + (tang+'#');
                        //     console.log(tang);
                        // }
// Despite my best efforts, I was not able to properly figure out how to recreate the triangle with a for loop. My best aswer that I submit would be the second entry with the string and while loop (Var=Trig)





//Part B

function isEven (number){
    if (number % 2 == 0 ){
        return "The number is even";
//         console.log("The number is even");
    }
    else if (number % 2 == 1){
        return "The number is odd";
//         console.log("The number is odd");
    }
    else {
        return "This is a decimal or NaN"
//         console.log("This is a decimal or NaN");
    }
}

// My version of the function isEven takes an inputed number and divids it by 2, if the number can evenutally be divided down to zero, a return will proclaim that "This number is even". If the number can only go down to 1 it will say "This is odd". If a decimal number is given or if a string is entered it then the third return will show.
