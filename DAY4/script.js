let input = document.getElementById('input');

function appendNumber(number) {
    console.log("현재value: ", input.value);
    input.value += number;
}

function appendOperator(operator) {
    console.log("현재value: ", input.value);
    //마지막 글자가 operator일경우 마지막글자를 새로 input한 값으로 덮어씌우기
    let getNum = getLastNumber();
    console.log(getNum);
    if (getNum) {
        input.value += operator;
    } else {
        input.value = input.value.slice(0, -1) + operator;
    }
}

//마지막으로 입력된 number를 추출
function getLastNumber() {
    //string의 마지막 값이 연산자일 경우 false를 return
    if (input.value.length == 0) return false;
    let i = input.value.length - 1;
    let lastChar = input.value.charAt(i);
    let getNum = 0;
    console.log("함수에서 검사한 값: ", lastChar);

    if (lastChar == '/' || lastChar == '*' || lastChar == '-' || lastChar == '+')
        return false;
    else {
        while (i >= 0) { //뒤에서부터 루프 첫 연선자의 index값 추출
            let num = input.value[i];
            if (num == '/' || num == '*' || num == '-' || num == '+') break;
            i--;
        }
        getNum = input.value.slice(i + 1, input.value.length);

        return getNum;
    }

}

// '%' 연산함수
function calculatePercent() {
    console.log("현재value: ", input.value);
    let getNum = getLastNumber();
    console.log(getNum);
    if (getNum) {
        input.value = input.value.slice(0, input.value.length - getNum.length);
        input.value += getNum / 100;
    }
}

function clearInput() {
    input.value = '';
}

function calculate() {
    if (input.value == '') return;
    if (!getLastNumber()) return;
    try {
        input.value = eval(input.value);
    } catch (error) {
        console.log(error);
        input.value = 'Error';
    }
}

