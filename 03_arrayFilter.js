// https://egghead.io/lessons/rxjs-the-array-filter-method

/* THIS IS THE OLD FUNCTION */
// function getStocksOver(stocks, minPrice) {
//     var results = [];
    
//     stocks.forEach(function(stock) {
//         if(stock.price >= minPrice) { // this line here is the 'predicate'
//             results.push(stock);
//         }
//     });

//     return results;
// }

/* THIS IS THE NEW FUNCTION, ACTUALLY EQUIVALENT TO THE ONE ABOVE */
function getStocksOver(stocks, minPrice) {
    return stocks.filter(function(stock){
        return stock.price >= minPrice; /* this True/False result from the 'predicate' function  
        determines if the item is added to the (new) output array */
    });
}

var expensiveStocks = getStocksOver(
    [{symbol: "XFX", price: 240.22, volume: 23432},
    {symbol: "TNZ", price: 332.19, volume: 234},
    {symbol: "JKJ", price: 120.22, volume: 5323}], 
    150.00);

console.log(JSON.stringify(expensiveStocks));