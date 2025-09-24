function merge_Sort(array) {
	// Base case
	if(array.length <= 1) {
		return array;
	}
	
	// Recursive case
	let midpoint = Math.ceil(array.length / 2);
	
	// Recursive callss
	let leftArray = merge_Sort(array.slice(0, midpoint));
	let rightArray = merge_Sort(array.slice(midpoint, array.length));
	
	// Merge and Return 
	return merge(leftArray, rightArray);
}


/*
function merge(left, right) {
	let result = [];
	
	let i = 0; // For traversing left array
	let j = 0; // For traversing right array
	
	while (i < left.length && j < right.length){
		if (left[i] <= right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}
	
	// Remaining elements
	while (i < left.length) {
		result.push(left[i]);
		i++;
	}
	
	while(j < right.length) {
		result.push(right[j]);
		j++;
	}
	
	return result;
}
*/


// Recursive merge function

function merge(left, right) {
	// Base cases
	if(left.length <= 0){
		return right;
	} if (right.length <= 0){
		return left;
	}
	
	// Recursive callss
	if(left[0] <= right[0]) {
		return [left[0]].concat(merge(left.slice(1), right));
	} else {
		return [right[0]].concat(merge(left, right.slice(1)));
	}
}



console.log(merge_Sort([1, 2, 43, 45, 32, 33, 98, 0, 88, 76]));