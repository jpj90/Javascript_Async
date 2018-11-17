// https://egghead.io/lessons/rxjs-create-an-array-concatall-method

var exchanges = [
    [
        { symbol: "XFX", price: 240.22, volume: 23432},
        { symbol: "TNZ", price: 332.19, volume: 234}
    ],
    [
        { symbol: "JXJ", price: 120.22, volume: 23432},
        { symbol: "NYN", price: 88.47, volume: 98275}
    ]
];

// this is actually writing your own extension methode, using .prototype
Array.prototype.concatAll = function() {
    var results = [];

    /* this function will "flatten" the array, meaning that all 
       previously nested items will be collected into one 
       array, or in other words concatinated. do note however that
       this function will only flatten an array by 1 dimension!
       it will also not work on a flat array, because it assumes
       there is a second dimension  */
    this.forEach(function(subArray){
        subArray.forEach(function(item){
            results.push(item);
        })
    });

    return results;
}

// THIS IS THE OLD FUNCTION
// exchanges.forEach(function(exchange){
//     exchange.forEach(function(stock){
//         console.log(JSON.stringify(stock));
//     })
// });

// THIS IS THE NEW FUNCTION, USING CONCATALL()
var stocks = exchanges.concatAll();

stocks.forEach(function(stock){
    console.log(JSON.stringify(stock));
});