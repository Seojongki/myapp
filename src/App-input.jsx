import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('') //input은 무조건 문자임
  const [names, setNames] = useState(['둘리','도우너','마이콜'])
  return (
    <>
      <h1>좋아하는 사람 이름</h1>
      <ul>
          {names.map((name,i) => {
            return(
              <li key={i}>{name}</li>
            )
            
          })}
        </ul>
        이름: 
        <input 
          type="text" 
          value={name}
          onChange={(e) => {
          setName(e.target.value);
        }} />
        <p>{name}</p>
        <button 
          onClick={ () => {
            let copy = [...names, name];
            console.log(copy);
            setNames(copy); //names 배열에 이름 추가
            setName('');
          }}  
        >쓰기</button>
        
    </>
  )
}

export default App
