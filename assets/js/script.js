const listResult = document.createElement('ul');

listResult.setAttribute('class', 'text-center container list-group col-5 mt-5');
document.body.appendChild(listResult);

let firstNumber = 2;
let secondNumber = 4;

while ((firstNumber * secondNumber) < 250) {
    let result = firstNumber * secondNumber;
    secondNumber = result;
    let finalResult = document.createElement("li");
    finalResult.setAttribute('class', 'list-group-item font-weight-bold');
    finalResult.textContent = result;
    listResult.appendChild(finalResult);
}