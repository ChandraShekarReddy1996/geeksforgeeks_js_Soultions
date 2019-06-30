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

	while(array.length > 1){
		array = rotateElement(array)
		array.pop(array.length-1)
	}

	console.log('Final --> ',array)
}


//Factorial in Recursion

var factorial = (number) => {
	if(number == 0)
		return 1
	else if(number >=1 )
		return number * factorial(number - 1)
}


//HCF of Two Numbers

var hcf = (num1,num2) => {
	while(num1 != num2){
		if(num1 > num2)
			num1 = num1 - num2
		else
			num2 = num2 - num1
	}

return num1
}


//Ques : LCM of Two Numbers
var LCM  = (num1,num2) => {
	return num1 * num2/hcf(num1,num2)
}


//Fibonocci Series
var fibonocci = (placeCount) => {
	let num1 = 1
	let num2 = 1
	let num3 = 0
	let count = 0
	let fibonocci = [1,1]
	while(placeCount != count){
		num3 = num1 + num2
		fibonocci.push(num3)
		num1 = num2
		num2 = num3
		count++
	}

	return fibonocci
}


//Split the array and add the first part to the end
var splitAndRotate = (array,postion) => {
	let array1 = []
	for(let i=postion;i<array.length;i++){
		array1.push(array[i])
		if(i==array.length-1){
			for(let j=0;j<postion;j++){
				array1.push(array[j])
			}
		}

	}

	return array1
}

// rotateanddeleteElement(array)

// let fact = factorial(4)
let result = splitAndRotate(array,2)

console.log(result)