var testarray = [7, 9, 11, 12, 5]

var linearSearch = (array,item) => {

    array.forEach((element,key) => {
        if(element == item)
        console.log(`${key} found in the array`)
    });

}


var binarySearch = (array,firstItem,LastItem,des) => {

    while(firstItem <= LastItem){
        MidItem = firstItem + (LastItem - firstItem)/2

        console.log(array[MidItem])

        if(array[MidItem] == des)
        return MidItem
        
        if(array[MidItem] > des)
        LastItem = MidItem - 1 
        else 
        firstItem = MidItem + 1
    }

    return -1
    
}

//Ques : to Find the Pair with Max Sum

var findPairWithMaxSum = (array) => {

    let maxSum = 0
    let maxpair = []

    for(var i=0;i<array.length;i++){
        for(var j = 0;j<array.length;j++){
            if(i != j){

                //To FInd the Pair with the predefined Sum then Need to Have that Condition here
                if(maxSum < array[i] + array[j]){
                    maxSum = array[i] + array[j]
                    maxpair = [array[i],array[j]]
                }
            }
        }
    }

    console.log('maxSum : => ',maxSum,'maxpair : => ',maxpair)
}

//Ques : Find the Rotation Count in Rotated Sorted array

var fimdRotationCount = (array) => {
    let count  = 0
    for(let i = 0;i < array.length ; i++){
        if(array[i] > array[array.length - 1] && i != array.length - 1)
            count++
    }

    console.log('count of the Iteration : => ',count)

}


var searchAnArray = (array,des) => {

    array.sort()

    console.log(typeof(array),array)
    let result = binarySearch(array,0,array.length - 1,des)

    if(result > 0)
    console.log(`Index of ${des} is ${result}`)
    else
    console.log(`${des} is not found`)

}




// linearSearch(testarray,1)
// searchAnArray(testarray,3)
// findPairWithMaxSum(testarray)
fimdRotationCount(testarray)

