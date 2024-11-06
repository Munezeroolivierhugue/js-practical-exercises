var arr = [10,10,10,5,10,10,10,10,10]
console.log(Unique(arr))
function Unique(array){
    var uniqueNumber
    var sortedArray = array.sort()
    if(sortedArray[0] != sortedArray[1]){
        uniqueNumber = sortedArray[0]
    } 
    else{
        uniqueNumber = sortedArray[sortedArray.length-1]
    }
    return uniqueNumber
}