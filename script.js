
//speed from kmh to kms - 1st method

let kmhSpeed = 360;
console.warn (kmhSpeed / 3600);

// second method

let kmhSpeed2 = 360;
let msSpeed2 = kmhSpeed / 3600;
console.log(msSpeed2);

//third method
let kmhSpeed3 = 360;
let htos = 3600;
console.log(kmhSpeed3 / htos)


let mytime = Date(1992,3,5)
console.log(mytime)

//bonus?

// let today = Date();
// let bday = '03/05/1992';

// let x = new Date(today);
// let y = new Date(bday);


// const diffDays = Math.floor((x - y) / (1000 * 60 * 60 * 24));
// console.log(diffDays);

//second version of bonus
let birthDate, today, days;
birthDate = prompt("Please input your Birthday like yyyy,mm,dd " )
today = new Date();
birthDate = new Date(birthDate);
days = Math.round((today - birthDate) / (1000 * 60 * 60 * 24));
console.log(days)
alert(` I did it:) and since your birthday has passed ${days} days. Have a good day!`);