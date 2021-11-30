let arrfun=[ 2,5,13,16,25,29,30,35,36,38,43,47];
let text=" "

for(let i=0; i<arrfun.length; i++) {
    console.log(arrfun[i]);
}

arrfun.forEach((value, i) => {
  console.log(value);
})

arrfun.forEach((value, i) => {
   text= text + value + " ";
  });
  console.log(text);



  arrfun.map((value, i) => {
      console.log(value*2);
  });

  arrfun.map((value, i) => {
      text=text + value*2 + " ";
  });
  console.log(text);


  let newarr=arrfun.filter((value, i) => {
      return value >25
  });
  console.log(newarr);
