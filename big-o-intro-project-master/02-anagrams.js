function firstAnagram(str1, str2) {
  let str2Array = str2.split("");
  for (let i = 0; i <= str1.length; i++) {
    let indexer = str2Array.indexOf(str1[i])
    if (indexer !== -1) {
      str2Array.splice(indexer, 1);
    }
  }
  if (str2Array.length === 0) {
    return true;
  }

  return false;

}


function secondAnagram(str1, str2) {
  let str1Arr = str1.split("");
  let str2Arr = str2.split("");


  const str1Sorted = str1Arr.sort();
  const str2Sorted = str2Arr.sort();

  let newStr1 = str1Sorted.join("");
  let newStr2 = str2Sorted.join("");

  return (newStr1 === newStr2);
}




function thirdAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (obj1[letter]) {
      obj1[letter]++;
    } else {
      obj1[letter] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (obj2[letter]) {
      obj2[letter]++;
    } else {
      obj2[letter] = 1;
    }
  }

  let lengthObj1 = Object.keys(obj1).length;
  let lengthObj2 = Object.keys(obj2).length;

  if (lengthObj1 === lengthObj2) {
    for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      if (!obj2[letter]) {
        return false;
      }
    }
    return true;
  }


  return false;
}






console.log(thirdAnagram("elvis", "lives"));



function fourthAnagram(str1, str2) {
  // Code goes here ....
}
