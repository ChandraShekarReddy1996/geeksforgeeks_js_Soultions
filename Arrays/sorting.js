var testarray = [3,2,1,6,5,4,7]

var selectionSort = (array) => {

    for(var i =0;i<array.length - 1;i++){
        for(var j = i+1; j<array.length;j++){
            var temp;
            if(array[i] < array[j]){
                temp = array[i]
                array[i] = array[j]
                array[j] = temp   
            }
        }
    }

    console.log(array)

}


var bubbleSort = (array) => {

    for(var j = 0;j< array.length - 1;j++){
        // console.log('outer loop',array)
        for(var i = 0;i< array.length - j -1;i++){
        // console.log('inner loop',array)
        var temp;
            if(array[i] < array[i+1]){
                temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp   
            }
        }
    }

    console.log(array)

}

// selectionSort(testarray)
// bubbleSort(testarray)
