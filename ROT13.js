/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


"grfg" == rot13("test")

"Grfg" == rot13("Test")
*/
// Array of alphabets
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w',
'x','y','z'];
//for an object which contains [key, value] pairs as {0:a,1:b,2:c,....,25:z}
var alphaObj ={};
alpha.forEach((a,i) => alphaObj[i] = a);

//function to get index of an alphabet
function getIndex(s){
    for(p in alphaObj){
        if (alphaObj[p] == s){
            return p;
        }
    }
}

//function to extract the 13th letter of the alphabets
function rot13(str){
    str = str.split('');
    const rotNumber  = 13;
    var zIndex = getIndex('z');// Index of the alphabet z
    //for each character in the string get the 13th character in str array
    str = str.map(s => {
        //index of the given character
        var orgIndex = Number(getIndex(s.toLowerCase()));
        //Index at 13th position from given character
        var finalIndex = ((orgIndex + rotNumber) > zIndex)?((rotNumber-1) - (zIndex- orgIndex)):(orgIndex+ rotNumber);
        //return uppercase if orginal character is in uppercase
        return  (s.toLowerCase() == s)?alphaObj[finalIndex]: alphaObj[finalIndex].toUpperCase();
     });
     // Join the array result to get a string
     str = str.join('');
     return str;
}
console.log(rot13('grfg'));
console.log(rot13('Grfg'));