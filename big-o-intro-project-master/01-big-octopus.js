const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];

function quadraticBiggestFish(fishes) {
  let longest;                                 // O(1)
  for (let i = 0; i < fishes.length; i++){     // O(n)           0    1   -  N
    let item1 = fishes[i];
    for (let j = 1; j < fishes.length; j++){   // O(n)          1-n  1-n
      let item2 = fishes[j];
      if (item1.length > item2.length){        // O(c^n)
        longest = item1;
      } else {
        longest = item2
      }
    }
  }
  return longest;
}

// console.log(quadraticBiggestFish(fishies))



function nlognBiggestFish(fishes) {
  const sortedFishes = fishes.sort((fish1, fish2) =>{
    return fish2.length - fish1.length;
  })
  return sortedFishes[0];
}



function linearBiggestFish(fishes) {
  let current;
  let currentLength = 0;
  for (let i = 0; i < fishes.length; i++){
    let item = fishes[i];
    if (item.length > currentLength){
      current = item;
    }
  }
  return current;

}

// console.log(linearBiggestFish(fishies))


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i < tilesArray.length; i++) {
    if (tilesArray[i] === direction) {
      return i;
    }
  }
}




tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction]
}

console.log(fastDance('left', tilesObj))
