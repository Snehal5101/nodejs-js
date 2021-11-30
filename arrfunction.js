let arrfun=[ 2,5,13,16,25,29,30,35,36,38,43,47];
let text=" ";



// for(let i=0; i<arrfun.length; i++) {
// console.log (arrfun[i]);
// }
let xi =" ";
for(let i=0; i<arrfun.length; i++) {
   
   xi=xi + arrfun[i] + " ";
    }; 

// arrfun.forEach((value, i) => {
//   console.log(value);
// })
forEachnum=" "
arrfun.forEach((value, i) => {
   forEachnum= forEachnum + value + " ";
  });
 



//   arrfun.map((value, i) => {
//       console.log(value*2);
//   });
let mapnum=" ";
  arrfun.map((value, i) => {
    mapnum=mapnum + value*2 + " ";
  });
  


  let newarr=arrfun.filter((value, i) => {
      return value >25
  });
  

  let reducearr=arrfun.reduce((acc, value) => {
      return acc * value;
  });
 

  let reversearr=arrfun.reverse();
  

  let everyarr=arrfun.every((value, i) => {
      return value >20;
  })
 


  let somearr=arrfun.some((value, i) => {
    return value >20;
})



let includevalue=arrfun.includes(26);



let value1=arrfun.includes(25);



module.exports.xi =xi;
module.exports.forEachnum=forEachnum;
module.exports.mapnum=mapnum;
module.exports.newarr=newarr;
module.exports.reducearr=reducearr;
module.exports.reversearr=reversearr;
module.exports.everyarr=everyarr;
module.exports.somearr=somearr;
module.exports.includevalue=includevalue;
module.exports.value1=value1;
