function hasTargetSum(array, target) {
	// Write your algorithm here
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				return true
			}
		}
	}
	return false
}
// This solution has a time complexity of O(n^2)

function hasTargetSumOptimized(array, target) {
	// Write your algorithm here
	const complementObj = {}
	for (let i = 0; i < array.length; i++) {
		const complement = target - array[i]
		if (complementObj[complement]) {
			return true
		} else {
			complementObj[array[i]] = true
		}
	}
	return false
}
// The time complexity of the optimized solution is O(n)

/* 
  Add your pseudocode here:
    1. Initialize an empty object, call it 'complementObj'
    2. Loop through each element in the array
        a. Find the complement of the current element with respect to the target by subtracting it from the target
        b. Check if the complement exists as a key in 'complementObj'
        c. If it does, then return true as we have found a pair of numbers that add up to the target
        d. If it doesn't, then add the current element to the object 'complementObj' as a key with value as true
    3. Return false, as no pair of numbers has been found that add up to the target

//////////////////////////

function hasTargetSum(array, target):
  for i from 0 to length of array - 1:
    for j from i + 1 to length of array:
      if array[i] + array[j] equals target:
        return true
  return false


*/

/*
  Add written explanation of your solution here:
  The hasTargetSum function takes an array of integers and a target integer as input, and returns true if any pair of numbers in the array adds up to the target number, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log('Expecting: true')
	console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10))

	console.log('')

	console.log('Expecting: true')
	console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25))

	console.log('')

	console.log('Expecting: false')
	console.log('=>', hasTargetSum([1, 2, 5], 4))
}

module.exports = hasTargetSum
