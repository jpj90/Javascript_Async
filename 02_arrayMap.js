// https://egghead.io/lessons/rxjs-the-array-map-method

function getStockSymbols(stocks) {

    /* the .map() function is a bit like a forEach 
       that will apply some transformation and output
       a new array from the first one. this is almost
       identical to the getStockSymbols method in the
       forEach.js file 
       
       also, just like forEach, map will also work 
       async! */
    return stocks.map(function(stock) {
        return stock.symbol; /* this is called the 'projection' function, 
        because it projects the transformed value into a new function */
    });
}

var symbols = getStockSymbols([
    {symbol: "XFXs", price: 240.22, volume: 23432},
    {symbol: "TNZ", price: 332.19, volume: 234},
    {symbol: "JKJ", price: 120.22, volume: 5323} 
]);

console.log(JSON.stringify(symbols));