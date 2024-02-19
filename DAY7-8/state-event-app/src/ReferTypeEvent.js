import React, { useState } from 'react'

const ReferTypeEvent = () => {
    const [user, setUser] = useState({ email: '', password: '', userName: '' })

    const handleUser = (e) => {
        // 특정 속성값만 update한 복제 객체 생성
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleEnterSave = (e) => {
        console.log('사용자 키보드 이벤트 값:', e.keyCode)

        if (e.keyCode === 13) {
            console.log('엔터키 입력')

            console.log('백엔드로 데이터를 전송', user)
            alert('저장완료')
        }
    }

    const handleSave = () => {
        console.log('백엔드로 데이터를 전송', user)
        alert('저장완료')
    }

    const handleInit = () => {
        setUser({
            email: '',
            password: '',
            userName: '',
        })
    }

    return (
        <div>
            <h1>참조타입-데이터바인딩기법</h1>
            메일주소:
            <input type="text" name="email" placeholder="메일주소" value={user.email} onChange={handleUser} />
            <br></br>
            비밀번호:
            <input type="password" name="password" placeholder="비밀번호" value={user.password} onChange={handleUser} />
            <br></br>
            사용자명:
            <input
                type="text"
                name="userName"
                placeholder="사용자명"
                value={user.userName}
                onChange={handleUser}
                onKeyDown={handleEnterSave}
            />
            <br></br>
            <hr></hr>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleInit}>초기화</button>
        </div>
    )
}

export default ReferTypeEvent
