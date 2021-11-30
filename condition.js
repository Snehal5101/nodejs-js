// for loop :print 1 to 100

// for (let value=0; value<=100; value++)
//  {
//      console.log(value); 
//  };

let x=" " ;
 for (let value=0; value<=100; value++)
 {
    x= x + value + " "; 
 }





// for loop :print 100 to 1
//  for (let value1=100; value1>=0; value1--)
//  {
//   console.log(value1);  
// };
let y=" ";
 for (let value1=100; value1>=0; value1--)
   {
    y= y + value1 + " ";   
}

// if else
let age=18;

let age1=26;

let time=13;

// while loop
let a=0; x2=" "
while(a<100){
    a++ ;
    x2 =  x2+a + " " ;
}


// do while
var i=0;
var x1=" ";
do{
  
    x1=x1+i+" ";
     i++;
                  
}while (i <= 100);
 
  
// Switch case
var color='green';
var zonetext;

switch(color){
    case 'green':
        zonetext="safe zone";
        break;

        case 'orange':
            zonetext="warning zone";
            break;

            case 'red':
                zonetext="danger zone";

                default:
                    zonetext= "no value found";
}







module.exports.age=age;
module.exports.age1=age1;
module.exports.time=time;
module.exports.x=x;
module.exports.y=y;
module.exports.x1=x1;
module.exports.x2=x2;
module.exports.zonetext=zonetext;