/**
*  Given two strings, write a method to decide if one is a permutation of the other. 
*/

function permutation(str1, str2) {
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');
  
    return sorted1 === sorted2;
}