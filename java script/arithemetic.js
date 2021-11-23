//--> Arithmetic//
{
    //additon//
    let a = 20;
    let b = 40;
    let result = a + b;
    console.log(result);
}
{
    //subtracting
    let a = 20;
    let b = 20;
    let result = a - b;
    console.log(result);
}
{
    //adiition and subtracting
    let a = 20;
    let b = 20;
    let c = 20;
    let result = a + b - c;
    console.log(result);
}
{
    // multification
    let a = 20;
    let b = 20;
    let result = a * b;
    console.log(result);
}
{
    //adiition and subtracting and multification
    let a = 20;
    let b = 20;
    let c = 100;
    let d = 300;
    let result = a * b + c - d;
    console.log(result);
}
{
    //division  
    let c = 300;
    let d = 100;
    let result = c / d;
    console.log(result);
}
{
    //division,subtracting,multification,addition
    let c = 300;
    let d = 100;
    let e = 10;
    let f = 100;
    let g = 200;
    let result = c / d * e + f - g;
    console.log(result);
}
{
    //remainder
    let c = 350;
    let d = 17;
    let result = c % d;
    console.log(result);
}
{
    //incrementing
    let c = 350;
    let d = 17;
    let result = c + d;
    console.log(result++);
    //post increment
    console.log(result++);
    console.log(result++);
    //pre increment
    console.log(++result);
    console.log(++result);
    console.log(++result);
}
{
    //decrementing
    let c = 350;
    let d = 17;
    let result = c + d;
    console.log(result--);
    //post increment
    console.log(result--);
    console.log(result--);
    //pre increment
    console.log(--result);
    console.log(--result);
    console.log(--result);
}
{
    //exponentiation
    let c = 17;
    let d = 17;
    let result = c + d;
    console.log(result ** 2);
}
//-->Assignment operators
{
    let x = 10;
    let y = 10;
    x += y;
    console.log(x);

    let a = 10;
    let b = 40;
    b -= a;
    console.log(b);

    let c = 10;
    let d = 40;
    c *= d;
    console.log(c);

    let e = 60;
    let f = 10;
    e /= f;
    console.log(e);

    let p = 60;
    let q = 10;
    p %= q;
    console.log(q);

    let m = 60;
    let k = 70;
    m |= k;
    console.log(m);
}
// logical operator

{
    // && AND operator

    let age = 20;
    let salary = 22000;
    let res = ((age >= 18) && (salary <= 25000));
    console.log(res);
    // || OR operator
    let sex = "male";
    let country = "india";
    let result = ((sex >= 'female') && (country <= 'india'));
    console.log(result);
    // NOT operator
    {
        let age = 20;
        let salary = 22000;
        let res = !(age >= 25);
        console.log(res);
    }
}
{
    //string operators
    let name = "krishna";
    let subname = "mohan";
    let res = name + "    " + subname;
    console.log(res);

    //Adding string and numbers

    let a = 5 + 5;
    let b = "10" + 10;
    let c = "krishna" + 5;
    console.log(a, b, c);

}
{
//bitwise operator

//bitwise AND
let and=10&5;
console.log(and);

let or=10|5;
console.log(or);

let xor=10^4;
console.log(xor);

let not=~10;
console.log(not);

let leftshift=10<<5;
console.log(leftshift);

let rightshift=10>>1;
console.log(rightshift);

}
