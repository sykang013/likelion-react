import PropTypes from 'prop-types';
//1-'크리에이트 콘텍스트'를 리액트에서 꺼내왔다.
import { useState, createContext, useMemo } from 'react';
import { getPathFromBaseUrl as baseURL } from '@/utils';

//2-걔를 실행하면 컨텍스트 객체 생성된다.
const GlobalStateContext = createContext();

//생성된 컨텐스트는 컨텍스트.프로바이더 컴포넌트를 사용할 수 있게 한다. 
//컨텍스트.프로바이더 컴포넌트를 감싸는 컴포넌트를 작성할 수 있다. 
export const GlobalStateProvider = ({ children }) => {
    //읽기용 인자 / 쓰기용(업데이트) 인자. 두번째 업데이트 상태를 관리할 수 있는 펑션도 제공할 수 있다.
    const [logoLabel, setLogoLabel] = useState(
      'Stateful Component & Form Design'
    );
  
    const [navList, setNavList] = useState([
      { id: 'home', to: baseURL(), text: '홈', active: false },
      { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
      { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
      { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
    ]);
  
    //useMemo가 하는 일은 logoLabel과 navList가 변경됐을때만 "다시" 값을 기억하려고 내보내려고 한다.
    const globalStateValue = useMemo(() => ({
        //읽기
        logoLabel,
        //쓰기
        updateLogoLabel: setLogoLabel,
        navList,
        updateNavList: setNavList,
      }),
    [logoLabel, navList]
  );

    //글로벌컨텍스트.프로바이더가 {}로 전달받은것을 감싸도록... 
    return (
        //3-생성된 컨텍스트는 프로바이더를 가진다 <Context.Provider> 근데 전달하려면 뭔 전달해줄건지 필요하니까 value라는 props로 값 전달. 
        //3-1-파일을 따로 준 이유는 관심사의 분리 차원에서
        //4-값의 형태는 배열(순서가 중요한경우)이든 객체든 내가 뭔하는 걸로 하면 됨. 
        <GlobalStateContext.Provider value={globalStateValue}>
        {children}
        </GlobalStateContext.Provider>
    );
};


GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};