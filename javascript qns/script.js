//displaying current date and time 
let date = new Date();
console.log(date);  
  let time = date.toLocaleTimeString() ;
  console.log(time);
  let m =['sun','mon', 'tue', 'wed', 'thursday','fri','sat','sun']
  let day = date.getDay();
console.log(m[day])
console.log('Today is: ' + m[day] + '.Current time is: '+ date.toLocaleTimeString())

//printing contents of the current window
let windows = window
//console.log(windows.print())

//getting current date only
let currentDate = date.toLocaleDateString();
console.log(currentDate);
let dates = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
console.log( dates + '/'+ month+'/'+ year);

//finding area of a triangle
let base = 5;
let height = 6;
let area = (1/2)* base * height 
console.log(area);

//determining whether a given year is a leap year 
function isLeapYear(years){
    if(years%4===0 && years%100!==0 || years%4===0 && years%100===0 && years%400===0)
    {
        return true
    }
    else{
        return false
    }
}
console.log(isLeapYear(2021));

//number 8
/*t num = Math.ceil(Math.random()* 10)
console.log(num)
let userInput = prompt('Choose a number between 1 and 10')
if (num===userInput){
    console.log('Good work')
}
else{
        console.log('Not matched')
}*/

//multiplication and division
/*let x = prompt('first number');
let y = prompt('second number');
console.log('multiplication: ' + x*y);
console.log('division:' +x/y);*/

//celcius to fahrenheit
function toCelcius(fah){
 return (5/9*(fah-32))
}
function toFah(cel){
    return ((9*cel)/5)+ 32
}
console.log(toFah(60));
console.log(toCelcius(45));

//getting the website url
let g = document.URL;
console.log(g);

//getting fileextension from file name
//the .split() method is used to separate a string into individual elements and returns them in an array
//the .pop() method is used to remove the last item in an array
let file = 'index.js';
console.log(file.split('.').pop());

//getting diffeerence
function diffe(m){
if(m > 13){
    return 2*(m-13)
}
else{
    return 13-m
}
}
console.log(diffe(20));

//sumation
function sum(a,b){
    if(a===b){
        return 3*(a+b)
    }
    else{
        return (a+b)
    }
}
console.log(sum(4,4))

//absolute difference
function diffe(m){
    if(m > 19){
        return 3*(m-19)
    }
    else{
        return 19-m
    }
    }
    console.log(diffe(20));

    //number 18
    function checkNum(d,f){
        if(d===50 || f===50 || d+f ===50){
            return true
        }
        else {
            return false
        }
    }
    console.log(checkNum(30,20));

    //number 19
    function integer(t){
        if(t>0.2 && t<400){
            return 'is an integer'
        }
        else{
            return 'not an integer'
        }
    }
    console.log(integer(20))

    //checking whether one integer is negative and the other is positive
    function number(q,p){
        if (q<0 && p>0 || q>0 && p<0 ){
            return true
        }
        else{
            return false
        }
    }
console.log(number(1,4));

//adding a string to another string
let item=prompt('Choose any given string')
//console.log(item[0]+item[1])
//the .split method separates the string into substrings and returns them as an array;
let b = item.split('')
//the .unshift method adds a new element at the start of an array and returns the new length of array b
let c = b.unshift('py')
//console.log(b)
//the .join method adds elements of array b into a string
let e = b.join('')
//console.log(e)
if((item[0])+(item[1])==='py'){
    console.log(item)
}
else{
    console.log(e)
}

//