import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const onIncrease = (e) => {
    setCount(count + 1);
  };
  const onDecrease = (e) => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>useState 훅 개발 샘플</h1>

      <h3>카운터:{count}</h3>
      <button onClick={onIncrease}>증가</button>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
};

export default UseStateHook;
