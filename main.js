const num1 = parseInt(window.prompt("Enter the first number"));
const num2 =  parseInt(window.prompt("Enter the second number"));
const sign = window.prompt("Enter the sign");
let result;

switch (sign) {
    case '+':
        result = num1+num2;
        break;
    case '-':
        result = num1-num2;
        break;
    case '/':
        result = num1/num2;
        break;
    case '*':
        result = num1*num2;
        break;
}


window.alert("This is the result " + result);