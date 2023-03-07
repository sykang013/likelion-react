import './App.css';
import ReactCounter from './ReactCounter/Counter';
import RecoilCounter from './RecoilCounter/Counter';

//import {useState} from 'react';

// Recoil 상태(아톰->상태)
// const countState = atom({
//   key: 'countState', //1. 키값설정
//   default: 0, //2. 초기값 설정
// })

// console.log(countState)

// 아톰의 타입 확인 
// console.log(typeof atom);

  // useRecoilState를 사용하면 더이상 리액트의 상태관리 도구가 아니라 리코일의 상태관리 도구.
  function App() {
    return (
      <div className="App">
        <RecoilCounter />
        <ReactCounter />
      </div>
    );
  }
  
  export default App;