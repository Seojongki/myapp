import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {

  const 이름 = useRef();
  console.log(이름.current);

  /*
    1. 마운트(앱 시작)
    2. 업데이트(state 벼경)
    3. 언마운트(앱 종료)
  */ 
  useEffect(() => {
    console.log('마운트: ',이름.current);
    //앱 시작시 검색창에 자동 포커스 주기
    이름.current.focus();
  },[]);
  
  return (
    <>
     <h1>useRef</h1>
      <input ref={이름} type="text" />
    </>
  )
}

export default App
