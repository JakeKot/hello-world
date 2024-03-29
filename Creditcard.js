//一个验证信用卡号是否符合标准的作业
//算法： Luhn Algorithm https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg?_gl=1*oduut1*_ga*MTc2MDYyODY3NS4xNjg2ODk3NzY2*_ga_3LRZM6TM9L*MTY5NTA4NTQxMy4xNTIuMS4xNjk1MDg1NDI2LjQ3LjAuMA..
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
//验证卡号是否正确
const validateCred = (array) => {
  let sum = 0;
  let count = 0;
  for (i = array.length - 1; i >= 0; i--) {
    count++;
      if ( count % 2 === 0) {
        if ( array[i] * 2 > 9) {
          sum = sum + (2 * array[i] - 9);
          //console.log(sum)
        } else {
          sum = sum + array[i] * 2;
          //console.log(sum)
        }
      } else {
        sum = sum + array[i];
      //console.log(sum)
      }
    //console.log(sum)
  }
  //console.log(sum)
  if ( sum % 10 === 0 ) {
    return true;
  } else {
    return false;
  }
}

//找出不对的卡号
const findInvalidCard = (array) => {
  const invalidCards = array.filter((item) => validateCred(item) === false)
  return invalidCards;
}

//不对卡号的银行
const idInvalidCardCompanies = (array) => {
  let CompanyList = [];
  for (i=0; i < array.length; i++) {
    console.log(array[i][0])
    switch(array[i][0]) {
      case 3:
        if (CompanyList.includes('Amex')){
          break;
        } else {
          CompanyList.push('Amex');
        }
      case 4:
        if (CompanyList.includes('Visa')){
          break;
        } 
        CompanyList.push('Visa');
      case 5:
        if (CompanyList.includes('Mastercard')){
          break;
        }
        CompanyList.push('Mastercard');
      case 6:
        if (CompanyList.includes('Discover')){
          break;
        }
        CompanyList.push('Discover');
    }
  } 
 // CompanyList.push('Amex');
  return CompanyList;
}



console.log(validateCred(valid1))
console.log(findInvalidCard(batch))
console.log(idInvalidCardCompanies(batch));



