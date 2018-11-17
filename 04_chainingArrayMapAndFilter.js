// https://egghead.io/lessons/rxjs-chaining-the-array-map-and-filter-methods

// AN IMPORTANT REASON TO LEARN PROGRAMMING WITHOUT LOOPS, IS THAT LOOPS
// ONLY WORK ON DATA THAT IS ALREADY IN MEMORY (SYNCHRONOUSLY AVAILABLE).
// THE FOREACH AND OTHER METHODS ALSO WORK WITH ASYNC DATA, LIKE EVENTS
// WHEN WORKING WITH EVENTS. SO THESE WILL WORK WITH BOTH!  

var stocks = [
    {symbol: "XFX", price: 240.22, volume: 23432},
    {symbol: "TNZ", price: 332.19, volume: 234},
    {symbol: "JKJ", price: 120.22, volume: 5323}
];

var filteredStockSymbols = 
    stocks.
        filter(function(stock){
            return stock.price >= 150.00;
        }).
            map(function(stock) {
                return stock.symbol;
            });

filteredStockSymbols.forEach(function(symbol) {
    console.log(symbol);
});