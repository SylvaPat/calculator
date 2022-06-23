alert("A Simple Calculator. Click 'OK' to start");
const firstNumber = parseFloat(prompt('Enter First Number:'));
const operator = prompt('Enter operator as +,   -,   /,   * ' );
const secondNumber = parseFloat(prompt('Enter Second Number:'));


let result = 0;
if(isNaN(firstNumber) || isNaN(secondNumber)){
    alert('Input not correct! pls refresh the page')
}else{
    if(operator== '+'){
        result = firstNumber + secondNumber;
    }else if(operator == '-'){
        result = firstNumber - secondNumber;
    }else if(operator == '/'){
        result = firstNumber / secondNumber;
    }else if(operator == '*'){
        result = firstNumber * secondNumber;
    }
    alert(firstNumber+operator+secondNumber+'=' + result);
}