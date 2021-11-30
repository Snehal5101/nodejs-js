
function resolve(){
const myPromise = new Promise((resolve, reject) =>{
    resolve('Student is present');
});
myPromise.then((value) =>{
    console.log(value);
}).catch((err) =>{
    console.log(err);
})
}




function reject(){
const myPromise = new Promise((resolve,reject) =>{
    reject("Student is absent");
});
myPromise.then((value)=>{
    console.log(value);
}).
catch((err)=>{
    console.log(err);
})
}




module.exports.resolve = resolve;
module.exports.reject = reject;