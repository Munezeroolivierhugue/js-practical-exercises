function ArrayStats(arr){
    var Stats = {
        sum: 0,
        average: 0.00,
        min: 0,
        max: 0 
    }
    //on the line below we implemented the sum
    for (let i = 0; i < arr.length; i++ ) {
        Stats.sum += arr[i];
      }

    //average
    Stats.average = Stats.sum / arr.length

    // Min and Max
    Stats.min = Math.min(...arr);
    Stats.max = Math.max(...arr);

    return Stats

}
var Array1 = [1, 2, 3, 4, 5]
console.log(ArrayStats(Array1))