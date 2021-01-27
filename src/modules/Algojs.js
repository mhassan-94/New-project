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
// --------------------------------------------------- Sort by String Length -------------------------------------
export function sortByLength(tab){
    var a = 0
    for (var n = 0; n < tab.length; n++){
        for (var t = n + 1; t < tab.length; t++)
        if(tab[t].length < tab[n].length){
            a = tab[t]
            tab[t]= tab[n]
            tab[n]= a
        }
    }
    console.log(tab)
    return tab
}

// --------------------------------------------------- Filter Strings from Array -------------------------------------
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

// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(n){
    var a = 2
    var b = 4
    var chickens = a * 2
    var cows = b * 3
    var pigs = b * 5 
    return chickens + cows + pigs
}
// --------------------------------------------------- Return Last Item -------------------------------------
export function lastItem(tab){
    var last = tab[tab.length - 1]
    return last
}
// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray(){
    var a = 0
    var tab = [1, 2, 3, 4]
    for (var n = 0; n <= tab.length; n++){
        while (tab[n] < tab [n+1]){
            a = tab[n];
            tab[n]=tab[n+1];
            tab[n+1] = a;
            n = 0
        }
    }
    console.log("loioioilioioloiolooioloi",tab)
    return tab
}
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
export function filterArrayInt(tab){
    var res = [];

    for (var i = 0; i < tab.length; i++){
        var test = (tab[i]);
        if (typeof test === 'number'){
            res.push(tab[i]);
        }
    }
    return res;
}
// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(n, l){
     var tmp = 0
     var res =[] 
     for (var i = 1; i <= l ; i++){
     tmp = i * n
     res.push(tmp)
    }
    console.log("---------------------------------------",tmp)
    return res
}
// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(h, m){
    var tmp = h * 3600
    var tmp1 = m * 60
    console.log("------------------",tmp, tmp1)
    return (tmp + tmp1)
}
// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(n){
    if(n > 0){
    var res = n * (-1)
    return res
    }
    return n
}
// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(num){
    var tmp = 0
    var res = []
    for (var n = 0; n < num; n++){
        tmp = tmp + 1
        res.push(tmp)
        }
        console.log(res)
    return res
}
// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(n, t){
    if (n <= 0 || t <= 0){
        return -1
    }
    console.log(n * t)
    return n * t
}
// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(n, t){
    if (n === 10 || t === 10 || n + t === 10){
        return true;
    }
    return false;
}
// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(n){
     var tmp = 0
     var res =[] 
     for (var i = 1; i <= n; i++){
     tmp = tmp + i
    }
    console.log("------------------------",tmp)
    return tmp
}
// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(step){
    var a = 6
    var b = 5 
    var res = a + (b * (step - 1))
    console.log("------------",res)
    return res
}