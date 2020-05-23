let numbers = [
    1,  // findFourCallback wordt gecalled (currentItem === 1, index 0, c = original array)
    2,  // findFourCallback wordt gecalled (currentItem === 2, index 1, c = original array)
    3,  // findFourCallback wordt gecalled (currentItem === 3, index 2, c = original array)
    4   // findFourCallback wordt gecalled (currentItem === 4, index 3, c = original array)
]
function findFourCallback(currentItem,index,c) {
    currentItem === 4
}

numbers.find(findFourCallback)