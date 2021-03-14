/**
* Write a method to replace all spaces in a string with '%20'. You may assume that the string
  has sufficient space at the end to hold the additional characters, and that you are given the "true"
  length of the string. (Note: If implementing in Java, please use a character array so that you can
  perform this operation in place.) 
*/

function urlify(str, length) {
	const arr = str.split('');
    let actualEnd = length - 1;
 
    for (let i = str.length-1; i >= 0 && actualEnd >= 0;) {
        if (str[actualEnd] === ' ') {
        arr.splice(i-2, 3, '%', '2', '0');
        i -= 3;
        --actualEnd;
    } else {
        arr[i] = str[actualEnd];
        --i;
        --actualEnd;
    }
    }
    
        return arr.join('');
}