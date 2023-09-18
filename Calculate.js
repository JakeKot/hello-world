//第一题
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
//codecademy测试

//这个是我写的
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

//这个是答案写的
const subLength = (str, char) => {
  let charCount = 0; //加了计数器，很好用
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      } //如果有三个相同的，就返回0
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1 //如果只有一个相同的，就不进里了
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
}; //看懂了，但感觉写的还没我好。。。

//第二题
/*Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

*/

//我写的
const groceries = (obj) => {
  let grocery = '';
  if (obj.length > 2) {
    for (i = 0; i < obj.length - 2; i++) {
      grocery = grocery + obj[i].item + ', ';
    }
    grocery = grocery + obj[obj.length - 2].item + ' and ' +obj[obj.length - 1].item; 
    return grocery
  } else if(obj.length === 2) {
    return obj[0].item + ' and ' + obj[1].item;
  } else if(obj.length === 1) {
    return obj[0].item;
  }
}

console.log(groceries( [{item: 'Carrots'}] ))

//答案，感觉答案好一点
const groceries = list => {
  let listString = ''

  for (let i=0; i<list.length; i++) {
    listString += list[i].item;
    if (i < list.length - 2) {
      listString += ', ';
    } else if (i == list.length - 2){
      listString += ' and ';
    }
  }
  
  return listString;
}
