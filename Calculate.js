/*Write a function subLength() that takes 2 parameters, 
a string and a single character. The function should search 
the string for the two occurrences of the character and return 
the length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

const subLength = (string, char) => {
  let index = [];
  for( i=0; i < string.length; i++) {
    if(string[i] === char) {
      if (index.length < 2) { 
      index.push(i);
      console.log(index);
      } else {
        return 0;
      }
    }
  }
  if(index.length > 1) {
  return index[index.length - 1] - index[0] + 1
  } else {
    return 0;
  }
}

console.log(subLength('uncopyrightable', 'u'));
