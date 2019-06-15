var array = [1,4,3,5,2,6];


var deleteElement = (array,location,cb) => {
	console.log(array)
	var temp = []
	array.forEach((item,key) => {
		if(key != location)
			temp.push(item)
	})

	console.log(temp)
}

deleteElement(array,array.length - 1)