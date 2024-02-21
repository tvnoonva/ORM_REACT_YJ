//DeepCopy의 주요기법은 자바스크립트 Spread 연산자(Operator)
//spread연산자는 배열/객체의 복사/병합시 주로 사용한다.

//배열기반 spread
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const numbersCombined = [...numbersOne, ...numbersTwo];
console.log("스프레드 연산자에 의해 병합된 신규배열", numbersCombined);

//배열 분할 할당하기
const numbers = [10, 11, 12, 13, 14, 15];
const [one, two, ...rest] = numbers;
console.log("one, two, rest", one, two, rest);

//객체기반에서의 Deep Copy 구현하기
const user = {
  id: 1,
  userName: "사용자",
  age: 50,
  address: {
    sido: "경기도",
    detail: "성남시",
  },
};

const user1 = user;
user1.userName = "강창훈";

const user2 = { ...user };
user2.age = 60;
user2.address.sido = "서울특별시"; //spread 연산자는 2depth 이상 소스의 경우 원본 소스와 값을 공유한다.

console.log("user", user);
console.log("user1", user1);
console.log("user2", user2);

console.log("user===user1", user === user1);
console.log("user1===user2", user1 === user2);

//기존 속성 변경 및 신규 속성 추가
const car = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const myCar = { ...car, brand: "kia", price: 5000 };
console.log("myCar", myCar);

//객체 병합
const company = {
  companyName: "Kia Auto",
  country: "Korea",
  telephone: "82)02-555-6666",
};

const carInfo = { ...myCar, ...company };
console.log("객체 병합", carInfo);

//2Depth 이상의 객체에서 DeepCopy
const order = {
  orderNo: 1000,
  orderName: "강창훈",
  amount: 10000,
  products: [
    { pid: 1, productName: "LG노트북" },
    { pid: 2, productName: "LG마우스" },
  ],
  address: {
    zipCode: "11111",
    sido: "경기도",
    detail: "성남시 수성구",
  },
};

//2Depth이상의 속성의 값이 배열인 경우는 array.map()메소드 이용
//2Depth이상의 값이 객체인 경우 spread연산자를 통해 복사하여 재할당
const newOrder = {
  ...order,
  products: [
    ...order.products.map((p) => {
      //배열 내의 객체들 DeepCopy 처리하기
      //map을 통해서는 배열의 deepcopy본만 생성, 객체들은 추가로 deepcopy 진행 필요
      return { ...p };
      //return p <<swallow copy
    }),
  ],
  address: { ...order.address },
};

newOrder.address.sido = "서울특별시";
newOrder.products[0].productName = "삼성노트북";
console.log("order", order);
console.log("newOrder", newOrder);
