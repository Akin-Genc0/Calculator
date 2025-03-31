const output = document.getElementById('text');
const soutput = document.getElementById('stext');
const btn = document.getElementById('num');
const btnc = document.getElementById('c');
const btnb = document.getElementById('b');

let currentNumber = ""; 
let optr = ["+","-","/","*","%"];  

btn.addEventListener('click', function(e) {
    let res = 0;
    let err = "Error";

    currentNumber += e.target.textContent;

    // Clicking white space does not trigger an error
    if (!e.target.matches("button")) return;

    output.textContent = currentNumber;

    // Nested loop that goes through currentNumber and optr array
    for (let i of currentNumber) {
        for (let j of optr) {
            
            // Does a character from optr appear in currentNumber?
            if (i === j) {
                const lastChar = currentNumber[currentNumber.length - 1];

                // Only evaluate if last character is NOT an operator
                if (!optr.includes(lastChar)) {
                    try {
                        res = eval(currentNumber);
                        soutput.textContent = currentNumber;  
                        output.textContent = res;
                    } catch (e) {
                        output.textContent = err;
                        console.error("Eval failed:", e);
                    }
                }
            } 
            // If result length is greater than 8 characters, round it
            else if (res.toString().length > 8) {
                output.textContent = res.toFixed(3); 

            } 
            // If the last and second-to-last values are operators, remove the last one
            else if (optr.includes(currentNumber[currentNumber.length - 1]) &&
                     optr.includes(currentNumber[currentNumber.length - 2])) {  
                currentNumber = currentNumber.slice(0, -1);
                output.textContent = currentNumber;
            }  
        }  
    }

    // Set error message if value is invalid
    if (!isFinite(res)) {
        output.textContent = err;  
    }
});

// AC button resets values
btnc.addEventListener('click', function() {  
    soutput.textContent = "";   
    res = 0;
    currentNumber = "";
    output.textContent = 0;
});

//Backspace button
btnb.addEventListener('click', function() {  
    currentNumber = currentNumber.slice(0, -1);
    res = eval(currentNumber); 
    soutput.textContent = currentNumber;  
    output.textContent = res;  
});





//old way i was doin it

/*




   for(let i = 0; i < currentNumber.length; i++){
        for(let j = 0; j < optr.length; j++){
            if(currentNumber[i] === optr[j] ){ 
             
                opp = optr[j];  
                ind = currentNumber.indexOf(optr[j]) +1;  
                num1 =  currentNumber.slice(0, ind -1) ; 
                num2 = currentNumber.slice(ind, currentNumber.length -1) 
                num1 = Number(num1);
                num2 = Number(num2);
               } 
               
               else if(currentNumber[i] === "="){
                   
                    res  = operate(num1, opp, num2); 
                    output.textContent =   res;
                    currentNumber = res ;
                    num1 = res;
                    opp = "";
                    num2 = 0;  
                                  
            }  else if(res.toString().length > 4){
                output.textContent =   res.toFixed(3);
            }   
           
    }
    
    }










 else if(currentNumber[i] === "="){
                   
                num2 = currentNumber.slice(ind, currentNumber.length -1) //gstarting index is the currectnumber up t the oprator and we add +1 so it skips it and we get het nmber nad not *88 instead we get 88
                    num2 = Number(num2); // convert to int
                    res  = operate(num1, opp, num2); 
                    output.textContent =   res;
                    currentNumber = res ;
                    num1 = res;
                    opp = "";
                    num2 = 0;  
                                  
            }  else if(res.toString().length > 4){
                output.textContent =   res.toFixed(3);
            } 

            */