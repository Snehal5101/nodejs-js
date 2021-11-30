let StudData = require('./JSIntro');
let {i1,i2,car}= require("./js-opertors");
let {num,text,text2} = require("./arrayintro");
let {age,age1,time,x,y,x1,x2,zonetext} = require('./condition');
let timedemo= require("./settimeout");
let {resolve,reject}= require("./promise");

// JSIntro
StudData();

// js-oertion
console.log(i1);
console.log(i2);
console.log(car.type);
console.log(car.model);
console.log(car.color);

// arrayintro
console.log("This is number array: " + num);

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.slice(5,10));
console.log(text.slice(-5,-10));
console.log(text.substring(9,16));
console.log(text.substr(10,6));
console.log(text.substr(481));
console.log(text.substr(-6));
console.log(text.replace('ipsum','gipsum'));
console.log(text.indexOf('consectetur'));
 console.log(text.indexOf('concentrat'));
console.log(text.includes('consectetur'));
console.log(text.includes('concentrat'));
console.log(text.search('concentrat'));
console.log(text.search('consectetur'));
console.log(text+text2);
console.log(text.concat('',text2));

// condition

// for
console.log(x);

console.log(y);

// if else condition

if (age>=18){
    console.log('You can vote');
}
else {
    console.log('You can not vote');
}

// if else ladder
if (age1<20){
    console.log('You are young');
}
else if (age1<45){
    console.log('You are middle age');
}
else{
    console.log('You are aged');
}

// if else nested
if (time<=15){
    if (time<12){
        console.log('Good Morning');
    }
    else{
        console.log('Good Afternoon');
    }
}
else{
    if (time<19){
        console.log('Good Evening');
    }
    else{
        console.log('Good Night');
    }
}

// while......do while
console.log(x2);

console.log(x1);


// switchcase
console.log(zonetext);


// settimeout
timedemo();


// promise
resolve();

reject();

