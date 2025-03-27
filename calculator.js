const output = document.getElementById('text')
const btn = document.getElementById('num');
const btnc = document.getElementById('c')

const add = (x,y) => x + y;
 
const div = (x,y) => x / y;

const sub = (x,y) => x - y;

const mult = (x,y) =>  x * y

const mod = (x,y) => x % y;

function operate(n1, op, n2){

    if(op === "+"){
        return add(n1,n2);
    } else if(op === "-"){
        return sub(n1,n2);
    }else if(op === "*"){
       return mult(n1,n2);
    } else if(op === "/") {
        return div(n1,n2);
    } else if(op === "%") {
        return mod(n1,n2);
    }
return 0;

}


let co = "";
let currentNumber = "";
let optr = ["+","-","/","*","%"]
btn.addEventListener('click', function(e) {

    let num1 = 0;
    let num2 = 0;
    let ind = 0;
    let opp = "";
   let res = 0
  let ans = 0;
   
    currentNumber += e.target.textContent;
    output.textContent = currentNumber;
    

   for(let i = 0; i < currentNumber.length; i++){
        for(let j = 0; j < optr.length; j++){
            if(currentNumber[i] === optr[j] ){ // if the value enterd is equal to a oprator then do somthing 
             
                opp = optr[j]; //gets oprator
                ind = currentNumber.indexOf(optr[j]) +1; // gets the indexx of the oprator so wecan use it to find the seccond number
                num1 =  currentNumber.slice(0, ind -1) ;  //anythimg from 0 index till that oprator is a num1 maybe stor that vlaue in a new varble
                num1 = Number(num1); // convert to int
             
                
               } 
               
               else if(currentNumber[i] === "="){
                   
                num2 = currentNumber.slice(ind, currentNumber.length -1) //gstarting index is the currectnumber up t the oprator and we add +1 so it skips it and we get het nmber nad not *88 instead we get 88
                    num2 = Number(num2);
                    res  = operate(num1, opp, num2); 
                    output.textContent = res;
                    currentNumber = res;
                    num1 = res;
                    opp = ""
                    num2 = 0;  
                   
            } 
       }
    
    }
});


btnc.addEventListener('click', function() {   
   num1 = 0;
   num2 = 0;
   opp = "";
   res = 0;
   currentNumber = "";
    output.textContent = 0;
});
 
//give the = a id and if its pressed run the fucntion
//if equal to '=' then run the oprator fucntion



/*
 let n1 =  console.log(currentNumber[0]);
   let o =   console.log(currentNumber[1]);
   let n2 =   console.log(currentNumber[2]);

    



   if(currentNumber[currentNumber.length -1] === "="){
   let res = operate(n1, o, n2)
   output.textContent = res;
   
   }
  
  
   if(currentNumber === "CA"){
    console.log("test")
   }
*/



/*
 console.log(i.pop())
                num1 = currentNumber;//anythimg from 0 index till that oprator is a num1 maybe stor that vlaue in a new varble
                console.log(num1)
                */