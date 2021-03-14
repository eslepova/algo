/**
* Implement an algorithm to determine if a string has all unique characters.
* What if youcannot use additional data structures?
*/

function isUnique1(str) {
	const sortedStr = str.split('').sort();
  for (let i = 1; i < sortedStr.length; ++i) {
  	if (sortedStr[i-1] === sortedStr[i]) {
    	return false;
    }
  }
  
  return true;
}

function isUnique2(str) {
	const map = {};
  
  str.split('').forEach((c) => (map[c] = (map[c] || 0) + 1));
  
  return !Object.values(map).some((i) =>  {
  	if (i > 1) {
    	return true;
    }
  });
}