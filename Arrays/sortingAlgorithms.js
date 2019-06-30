var array = [1,3,4,2,7]

console.log('Simple way to put down the sprting in js --> ',array.sort())

var swap = (array,a,b) => {
var temp = 0;
temp = array[a]
array[a] = array[b]
array[b] = temp

return array 
}

var bubbleSort = (array) => {
	for(var i = 1;i<array.length;i++){
		if(array[i-1] > array[i])
			swap(array[i-1],array[i])
	}
}
