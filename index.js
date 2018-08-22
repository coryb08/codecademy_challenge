//1
reverseArray = arr => {
  let newArr = []
  while (arr.length > 0) {
    newArr.push(arr.pop())
  }
  return newArr
}

//2
greetAliens = arr => {
  for (var i = 0; i < arr.length; i += 1) {
    console.log(
      `Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`
    )
  }
}

//3
convertToBaby = arr => {
  let newArr = []
  for (var i = 0; i < arr.length; i += 1) {
    newArr.push("baby " + arr[i])
  }
  return newArr
}

//4
smallestPowerOfTwo = arr => {
  let results = []
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i]

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1
    while (j < number) {
      j = j * 2
    }
    results.push(j)
  }
  return results
}

//5
acceptEverything = str => {
  console.log(`Ok, I guess I will eat some ${str}.`)
}

declineEverything = arr => {
  for (let i = 0; i < arr.length; i++) {
    politelyDecline(arr[i])
  }
}

//6
squareNums = arr => {
  let result = []
  arr.map(num => result.push(num * num))
  return result
}

//7
shoutGreetings = arr => {
  let newArr = []
  arr.map(str => newArr.push(str.toUpperCase() + "!"))
  return newArr
}

//BONUS

//8
sortYears = arr => {
  return arr.sort().reverse()
}

//9
justCoolStuff = (arr1, arr2) => {
  helper = ele => {
    if (arr2.includes(ele)) {
      return ele
    }
  }
  return arr1.filter(this.helper)
}

//10
isTheDinnerVegan = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source !== "plant") {
      return false
      break
    }
  }
  return true
}

//11
dogFactory = (name, breed, weight) => {
  return {
    name,
    breed,
    weight
  }
}
