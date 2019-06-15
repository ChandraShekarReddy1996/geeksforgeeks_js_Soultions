var array = [1,2,3,4,5,6]

/*QUES : To Rotate the Last Element to the First postion while deleting the Second last element in an Array*/


var rotateElement = (array) => {
	var temp = []
	array.forEach((item,key) => {
		if(key == (array.length-1))
			temp.push(item)
	})

	array.forEach((item,key) => {
		if(key != (array.length-1))
			temp.push(item)
	})
	return temp
}


var rotateanddeleteElement = (array) => {
	console.log("to rotate the element")

	console.log(Math.max(...array))

	while(array.length > 1){
		console.log(array)
		array = rotateElement(array)
		array.pop(array.length-1)
		
	}

	console.log('Final --> ',array)
}


rotateanddeleteElement(array)