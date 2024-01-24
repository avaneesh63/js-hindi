let myDate=new Date()
console.log(myDate.toString());
console.log(myDate);
console.log(typeof myDate);

let myTimestamp=Date.now()
console.log(myTimestamp);

let newDate=new Date()
console.log(newDate);

newDate.toLocaleDateString('default',{
    weekday:"long",

})
