
const add = (x,y) => x + y;
 
const div = (x,y) => x /y;

const sub = (x,y) => x - y;

const mult = (x,y) =>  x * y

function operate(num1, op, num2){

    if(op == "+"){
        return add(num1,num2);
    } else if(op == "-"){
        return sub(num1,num2);
    }else if(op == "*"){
       return mult(num1,num2);
    } else if(op == "/") {
        return div(num1,num2);
    }
return 0;

}




function populate(num) {

}