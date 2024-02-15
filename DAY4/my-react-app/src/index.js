import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//정적 웹페이지(SPA)인 public/index.html안에 root div 태그요소를 호출
const root = ReactDOM.createRoot(document.getElementById('root'));

//root div태그안에 app.js 컴포넌트의 번들링된 결과물을 바인딩해서
//리액트앱의 메인 화면을 출력
root.render(
  //React.StrictMode : 리액트 앱 내부에서의 잠재적 문제점을 알아내고 완전하지 않은 것들에대해 경고해주기 위한 개발지원모드
  //React App(app.js) 실행시 잠재적 위험요소에 대해 터미널에 표기하고자 할때는 <React.StrictMode>로 app.js를 감싸준다.
  //실제운영(production)환경에서는 해당 코드가 무시된다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
