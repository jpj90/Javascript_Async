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

console.log("stuff");

exchanges.forEach(function(exchange){
    exchange.forEach(function(stock){
        console.log(JSON.stringify(stock));
    })
});