//원시타입 변수 선언과 할당

let score;
score = 80;
score = 90;

console.log("스코어값:", score);

let copy = score;

console.log("copy-score1", copy);

copy = 100;

console.log("copy-score2", copy);

// === 연산자: 값/타입/메모리 주소 비교
console.log("변수의 메모리 주소 비교", score === copy);

//------------------------------------------
//참조타입 변수 선언과 할당
var user1 = {
  id: 1,
  name: "eddy",
  age: 45,
  address: { sido: "경기도", detail: "성남시" },
};
console.log("참조타입-객체 정의하고 값 할당", user1);

user1.name = "강창훈";
console.log("참조타입:", user1);

//참조타입 복사
var user2 = user1;
user2.name = "홍길동";
console.log("참조타입 복사:", user1, user2);
console.log("변수 비교", user1 === user2);
