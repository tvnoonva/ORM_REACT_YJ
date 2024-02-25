import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

//계산함수
const getAverage = (numbers) => {
  console.log("계산중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const PerformHook = () => {
  //숫자 입력박스의 html 요소를 직접 스크립트로 제어하기 위해 useRef()함수 생성하기
  const numberTag = useRef(null);

  //단일 입력 데이터
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  useEffect();

  //평균값처리
  //useMemo 훅을 사용하지 않을 경우
  //   const avg = getEverage(list);

  //useMemo 훅을 사용해 호출하는 공통연산함수
  //useMemo(실행함수,[데이터 변경 조건상태값 지정]);
  //list 숫자배열의 값이 변경될때만 getAverage 함수를 호출한다
  //메모이제이션 기능을 이용해 list의 값을 별도 저장소에 기록하고 있다가 변경을 감지하면 getAverage()함수를 실행시킨다.
  //화면 렌더링시마다 불필요하게 getAverage() 함수를 실행시키는 자원 낭비를 방지하여 성능을 향상시킨다.
  //useMemo는 특정 재사용 가능 함수를 특정조건에서 실행할 수 있게하여 앱 성능을 향상시킨다
  const avg = useMemo(() => getAverage(list), [list]);

  //useCallback Hook을 통해서 sonAdd는 number,list가 변경될때만 해당 함수가 만들어지게 하여
  //모든 이벤트나 화면 랜더링에서 불필요하게 생성되지 않도록 한다.
  const onAdd = useCallback(() => {
    setList(list.concat(parseInt(number)));
    setNumber(0);
  }, [number, list]);

  //데이터 바인딩처리 - 입력값이 들어올때마다 함수가 재생성
  //   const onNumberChange = (e) => {
  //     setNumber(e.target.value);
  //   };

  //useCallback으로 구현하기
  //이벤트 처리함수와 관련된 특정 데이터 변경이 발생할때만 해당 이벤트 핸들러 함수가 생성되게 한다
  //useCallback(실행함수정의, [실행조건]);
  //실행조건이 빈배열이면 최초 컴포넌트 로딩시 1번만 함수가 생성된다.
  const onNumberChange = useCallback((e) => {
    setNumber(e.target.value);

    //마우스 포커스
  }, []);

  return (
    <div>
      <input ref={numberTag} value={number} onChange={onNumberChange}></input>
      <button onClick={onAdd}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:{avg}</b>
      </div>
    </div>
  );
};

export default PerformHook;
