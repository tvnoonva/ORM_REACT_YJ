import React, { useState } from 'react'

const PrimitiveTypeEvent = () => {
    //회원가입 데이터를 개별적 원시타입으로 정의하고 초기값 할당
    //데이터의 구조를 정의하고 초기값을 할당한다
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleName = (e) => {
        setUserName(e.target.value)
    }

    const handleSave = () => {
        //사용자 데이터를 생성하고 백엔드로 전송한다.
        var user = {
            email: email,
            password: password,
            userName: userName,
        }

        console.log('백엔드로 데이터를 전송', user)
        alert('저장완료')
    }

    const handleInit = (e) => {
        setEmail('')
        setPassword('')
        setUserName('')
    }

    const handleEnterSave = (e) => {
        console.log('사용자 키보드 이벤트 값:', e.keyCode)

        if (e.keyCode === 13) {
            console.log('엔터키 입력')
            var user = {
                email: email,
                password: password,
                userName: userName,
            }

            console.log('백엔드로 데이터를 전송', user)
            alert('저장완료')
        }
    }

    return (
        <div>
            <h1>회원가입-원시타입 데이터 바인딩</h1>
            메일주소:
            <input type="text" placeholder="메일주소" value={email} onChange={handleEmail} />
            <br></br>
            비밀번호:
            <input type="password" placeholder="비밀번호" value={password} onChange={handlePassword} />
            <br></br>
            사용자명:
            <input
                type="text"
                placeholder="사용자명"
                value={userName}
                onChange={handleName}
                onKeyDown={handleEnterSave}
            />
            <br></br>
            <hr></hr>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleInit}>초기화</button>
        </div>
    )
}

export default PrimitiveTypeEvent
