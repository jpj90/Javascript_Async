// https://egghead.io/lessons/rxjs-the-array-foreach-method

/* THIS IS THE OLD VERSION WITH A FOR LOOP */
// function getStockSymbols(stocks) {
//     var symbols = [],
//         counter,
//         stock;

//     for(counter = 0; counter < stocks.length; counter++) {
//         stock = stocks[counter];
//         symbols.push(stock.symbol);
//     }

//     return symbols;
// }

/* THIS IS THE NEW VERSION WITH A FOREACH LOOP, WHICH CAN
   ALSO RUN ASYNC! */
function getStockSymbols(stocks) {
    var symbols = []

    stocks.forEach(function(stock) {
        symbols.push(stock.symbol);
    })

    return symbols;
}

var symbols = getStockSymbols([
    {symbol: "XFX", price: 240.22, volume: 23432},
    {symbol: "TNZ", price: 332.19, volume: 234},
    {symbol: "JKJ", price: 120.22, volume: 5323} 
]);

console.log(JSON.stringify(symbols));