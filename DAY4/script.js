let input = document.getElementById('input');

function appendNumber(number) {
    input.value += number;
}

function appendOperator(operator) {
    //마지막 글자가 operator일경우 마지막글자를 새로 input한 값으로 덮어씌우기
    console.log(getLastNumber());
    if (getLastNumber()) {
        input.value += operator;
    } else {
        input.value = input.value.slice(0, -1) + operator;
    }
}

//마지막으로 입력된 number를 추출
function getLastNumber() {
    //string의 마지막 값이 연산자일 경우 false를 return
    if (input.value.length == 0) return false;
    let i=input.value.length -1;
    let lastChar = input.value.charAt(i);
    let getNum=0;
    console.log("함수에서 검사한 값: ", lastChar);

    if (lastChar == '/' || lastChar == '*' || lastChar == '-' || lastChar == '+')
        return false;
    else {
        while(i>=0){ //뒤에서부터 루프 첫 연선자의 index값 추출
            let num = input.value[i];
            if(num == '/' || num == '*' || num == '-' || num == '+') break;
            i--;
        }
        getNum=input.value.slice(i+1,input.value.length);

        return getNum;
    }

}

function calculatePercent() {
    //마지막으로 입력된 숫자를 /100
    //string의 뒤에서부터 순회하며 숫자값 추출하는 로직 필요
    let getNum=getLastNumber();
    if(getNum){
        
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
        input.value = 'Error';
    }
}

