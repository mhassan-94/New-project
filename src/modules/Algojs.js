"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}
// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1,arg2){
 return arg1 + arg2;
}
// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function goalTotal(arg1,arg2,arg3){
    return arg1 + arg2 + arg3;
}
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder(){
    return (2 + 2) * (2 + 2) * 2;
}
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue(tab){
    var tab = [58, 64, 32]
    return tab[0];
}
// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
export function minMax(tab){
    var a = tab[0]
    var b = tab[0]

    for (var n = 0; n <= tab.length - 1; n++){

        if(a > tab[n+1]){
            a = tab[n+1];
        }
        if(b < tab[n+1]){
            b = tab[n+1];
        }
    }
    var res = [a, b]
    return res
}
// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
// export function sortByLength(tab){
//     var a = 0
//     var tabs = tab
//     for (var n = 0; n <= tab.length - 1; n++){
//         for (var t = 0; t <= tab.length; t++)
//         if(tabs[n].length > tabs[t].length){
//             a = tabs[n]
//             tabs[n]= tabs[t]
//             tabs[t]= a
//         }
//     }
//     return tabs[n]
// }

// --------------------------------------------------- Sort by String Length -------------------------------------
export function filterArray(tab){
var result = [];
var tab = [1, 2, 3, "a", "b", 4]
var j = 0;
    for(var i = 0; i < tab.length; i++){
        if(tab[i] <= 0 || tab[i] >= 0){ 
        result[j] = tab[i];
        j++
        } 
    }
    console.log('loooooooooooooooooooooooool', result)
    return result
}
// --------------------------------------------------- Filter Strings from Array -------------------------------------

// --------------------------------------------------- Return Last Item -------------------------------------



// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(n){
    var a = 2
    var b = 4
    var chickens = a * 2
    var cows = b * 3
    var pigs = b * 5 
    return chickens + cows + pigs
}
// --------------------------------------------------- Reverse an Array -------------------------------------


// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition(n){
    var n = 9;
    console.log('loooooooooooooooooooooooooool', n + 1)
    return n + 1 
}
// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(flag){
   if (flag === true){
       return "true"; 
   }
    return "false";
}
// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
// export function filterArrayInt(tab){
// var result = [];
// var j = 0;

//     for(var i = 0; i < tab.length; i++){
//         if(tab[i] <= 0 || tab[i] >= 0){ 
//         result[j] = tab[i];
//         j++
//         } 
//     }
//     console.log('loooooooooooooooooooooooool', result)
//     return result
// }
// --------------------------------------------------- Array of Multiples -------------------------------------


// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------

// --------------------------------------------------- Return Negative -------------------------------------

// --------------------------------------------------- Simple Loop -------------------------------------


// --------------------------------------------------- Area of a Rectangle -------------------------------------

// --------------------------------------------------- Two Makes Ten -------------------------------------


// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------

// --------------------------------------------------- Matchstick Houses -------------------------------------
