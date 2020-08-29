function calc(sign) {
    let num1 = parseInt(document.getElementById('n1').value);
    let num2 = parseInt(document.getElementById('n2').value);
    switch (sign) {
        case '+':
            document.getElementById('out').innerHTML = num1+num2;
            break;
        case '-':
            document.getElementById('out').innerHTML = num1-num2;
            break;
        case '/':
            document.getElementById('out').innerHTML = num1/num2;
            break;
        case '*':
            document.getElementById('out').innerHTML = num1*num2;
            break;
    }
}