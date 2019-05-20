var billionaires = require('./billionaires.json'); 
/*
    Get the names of the billionaires that are in their 20s
*/

let twentyYearOldBillionaires = (arr)=>{
  arr.forEach(x=>{
    if(x.demographics.age>=20 && x.demographics.age<30) {
        console.log(x.name);
    }
    })
}
twentyYearOldBillionaires(billionaires);

/*
    create a new object with the billionairse year, name and worth rounded to the newarest integer
    {
        year: 1996,
        name: Bernardo Garza Sada,
        worth: 2
    }
*/

let roundedWorth = billionaires.map (x=>{
    console.log ({
        year: x.year,
        Name: x.name,
        wealth: Math.round(x.wealth["worth in billions"])
    })
});


/*
    sum the rounded worth of all the billionaires
*/

let aggregatedWorth= billionaires.reduce((prev,curr)=>{
        return prev+Math.round(curr.wealth["worth in billions"]);
    },0);
console.log(aggregatedWorth)

/*
    find the the richest billionaire, make sure the result is in an array
*/

let richest = (arr)=>{
     arr.forEach(x=>{
        if(x.rank===1) {
        console.log(x.name);
        }
    })
}
richest(billionaires);
      
/*
    find the poorest billioanire, make sure the result is in an array
*/

//NO JALA
let poorest = [billionaires.reduce((prev,element)=>{
    if(Object.keys(prev).length=== Object.keys({}).length){
        prev=element;
        return prev;
    }
    return prev;
    })
)];


/* make a new array containing the richest and the poorest billionaire
*/

//let richAndPoor = null;

module.exports = {
    twentyYearOldBillionaires,
    roundedWorth,
    aggregatedWorth,
    richest,
    poorest,
    /* richAndPoor
*/
};