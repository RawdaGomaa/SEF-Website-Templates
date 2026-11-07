var a=1_00;
var b=2_00.5;
var c=1e2;
var d=2.4;
console.log(parseInt(Math.min(a,b,c,d)));
console.log (Math.pow(a,(parseInt(d))));
console.log(parseInt(d))
console.log(Math.floor(d))
console.log(Math.trunc(d))
console.log(Math.round(d))

console.log((Math.floor(b)/Math.ceil(d)).toFixed(2))

console.log(Math.ceil(b)/Math.ceil(d))


let text="hello from javascript"

console.log(text.slice(6,10))

console.log(text.charAt(6)+ text.charAt(7)+ text.charAt(8)+ text.charAt(9));

console.log(text.charAt(15).toUpperCase().repeat(8))

console.log(text.split( ' ',1))

console.log(text.substr(0,6))+text.substr((-6))

console.log(text.charAt(0).toLocaleUpperCase()+text.slice(1));


let n=5
if (n==5){
    console.log('n=5')
}
else{
    console.log("n=" + n)
}
var gender ='male'
if(gender=='male'){
    console.log('he')
}else if(gender=='famale'){
    console.log('she')
}else{
    console.log('select the gender')
}
var salary=2000
var job = 'doctor'
if(salary<2000){
    console.log('no job')
}else if (salary>=2000 && salary<=4000){
    if (job == 'doctor'){
        console.log('the doctor salary is 3000')
    }else{
        console.log ('the'+job+'salary between 2000:4000')
    }
}

var degree=70 
if (degree>=90){
 console.log('excllent')
}else if(degree>=80){
    console.log('verygood')
}else if(degree>=70){
    console.log('good')
}else {
    console.log('very')
}


let Text ="your javascript";

if ((Text.length*2).toString() === "30"){
    console.log("30");
}
 if(Text.charAt(5)=== "j") {
    console.log("j");
 }

 if (typeof Text === "string"){
    console.log ("string");
 }
 if (typeof(Text.length) === "number"){
    console.log ("number");
 }
 if((Text.slice(0,4).repeat(2))=== "youryour"){
    console.log("youryour");
 }

 let f=10;
 (f<10)?console.log(10):(f==10 && c<=40)?console.log("10to40"):(f>40)?console.log(">40"):console.log("unknown");


 let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
} else if (holidays === 3) {
    money = 2000;
} else if (holidays === 4) {
    money = 1000;
} else if (holidays === 5) {
    money = 0;
} else {
    money = 0;
}
console.log('my money');



let job1 = "Manager";
let salary1 = 0;

switch (job1) {
  case "Manager":
    salary1 = 8000;
    break;
  case "IT":
  case "Support":
    salary1 = 6000;
    break;
  case "Developer":
  case "Designer":
    salary1 = 7000;
    break;
  default:
    salary1 = 4000;
}

console.log(`salary is ${salary1}`);


//task1
let myFriends = ["Sara", "Soha", "Ahmed", "Ali"];

let friendsToDisplay = myFriends.slice(0,3)
console.log(friendsToDisplay);
//task2
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

let finalArr1 = arrTwo.concat(arrOne).reverse();
console.log(finalArr1);
 let finalArr2 = arrTwo.reverse().concat(arrOne.reverse());
 console.log(finalArr2);

 //task3

 let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrss = [arr2[arr2.length - 1], arr1[arr1.length - 1], arr2[arr2.length - 2]].join('');
console.log(allArrss);
let allArrs = [arr2[arr2.length - 2], arr1[arr1.length - 1], arr2[arr2.length - 1]].join('');
console.log(allArrs); // "Fxy"

//task1

let Zero = 0;
let counter = 3;
let my = ["Ahmed", "Maryan", "Elham", "Osama", "Gamal", "Ameer"];

//1
my.splice(Zero + counter + 1, 2); 
console.log(my); 
 //2
let result = my.slice(1,3);

console.log(result);

//3
let index = Zero + 1; 
let name = my[index].substring(0, 1) + "l" + my[index].substring(2); 

console.log([name]);
//4

let index1 = Zero + 1; 
let result1 = my[index].slice(-2);

console.log([result1]);

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let userArray = ['ahmed', 30, 'phoneNumber', true, 'cairo', false];


for (let i = 0; i < userArray.length; i++) {
    
    if (userArray[i] === 'phoneNumber') {
        continue;
    }
    console.log(userArray[i]);
    
    if (i > 0 && userArray[i - 1] === 'phoneNumber') {
        break;
    }
}


//task1
function getFullName(fname, mName, lName) {
    const fullName = `${fname} ${mName} ${lName}`;
    return fullName;
}
const firstName = "John";
const middleName = "Paul";
const lastName = "Doe";

const fullName = getFullName(firstName, middleName, lastName);
console.log(fullName);  

//task2

function printArrayElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

const myArray = ['tea', 'coffee', 'suger'];

printArrayElements(myArray);

//task3

function loopNumbers(firstNum, endNum, continueNum, breakNum) {
    for (let i = firstNum; i <= endNum; i += continueNum) {
        if (i === breakNum) {
            break;
        }
        console.log(i); 
    }
} 
loopNumbers(1, 25, 5, 15);
    