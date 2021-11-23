document.getElementById("special").innerHTML = "father name prabhakar rao";
console.log("helloworld");
document.getElementById("normal").innerHTML;
document.getElementById('hide').style.display='block';
function myfunction() {
    document.getElementById("js").innerHTML='krishna mohan.';
}
//primitive data types-->

//undefined
var a=undefined;
console.log(typeof a);

var b;
console.log(a);
//number
var a;
a=10;
console.log(typeof a);
var n=123;
n=n+10;//mathematicalli addition
console.log('the value is:' +n);

var n=12.5;
n=n*10;//mathematically multification
console.log('the value is:' +n);

var n=10;
n=n-10;//mathematically subtraction
console.log('this value is:'+n);

//string
var b='krishna';
console.log(typeof b);

var str="ram";
var str1="krishna";
console.log('names are:'+str +str1);
//boolean
var y=10;
y=false;
console.log(typeof y);

var phone=8897249705;
phone=true;
phone=false;
console.log('correct no is:'+phone);
//null
var m;
m=null;
console.log(typeof m);

var age=null;
console.log('age is:' +age);

var name;
console.log();

//non-primitive data types-->


//scope concepts//

let krishna=20; //-->global
let pkm=100;
const mohan=90;//-->global
const pkm1=200;
function main() {

    let krishna1=40; //function
    const akka=500;
    const mohan1=700;
    console.log(krishna);
    console.log(pkm);
    console.log(pkm1);
    {
        let krishna1=60; // block
        const mohan1=80;// block 
        console.log(krishna1);
        console.log(mohan1);
        console.log(pkm);
        console.log(pkm1);
        console.log(akka);
        console.log(mohan1);
        console.log(krishna1);
    }  
    console.log(krishna); // global value executed inside function but vlaue changed and replaced function value
    console.log(mohan1);
}
main();
console.log(krishna);
console.log(mohan);
console.log(pkm);
console.log(pkm1);







