import React from 'react'
import { useState, useRef, useEffect } from "react";
import { styled } from 'styled-components';

function Select({position}) {


    const languageList = ['리액트', '자바', '스프링', '리액트네이티브'];
  const [Language, setLanguage] = useState('리액트');
  const [List, setList] = useState(false);

  const node = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (List && node.current && !node.current.contains(e.target)) {
        setList(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [List]);

  const languageClick = (index) =>{
    setLanguage(languageList[index])
    setList((pre) => !pre)
  }

  return (<div ref={node}>
    <StSelectButton
      className="flex shrink-0 pointer"
      onClick={() => setList((pre) => !pre)}
    >
      {Language}<div>▼</div>
    </StSelectButton>
    {List ? (<StLanguageList position={position}>
        {languageList.map((item, index)=>{
            return <StLi key={index} onClick={()=>languageClick(index)}>{item}</StLi>
          })}
      </StLanguageList>
    ) : null}
  </div>)
}

export default Select


const StSelectButton = styled.div`
    width: 300px;
    height: 40px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    
    cursor: pointer;
`

const StLanguageList = styled.ul`
top : 643px; // !
width: 300px;
height: 40px;
margin: 0%;
padding-left: 0; // ul 밑의 li부분은 기본적으로 padding-left값이 있어 이것을 초기화 해줌
list-style: none; // 목록 마커 삭제
position: ${(props) => props.position};
`;

const StLi = styled.li`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
font-size: 13px;
border-left: 2px solid lightgrey;
border-right: 2px solid lightgrey;
cursor: pointer;
&:hover {
    background-color: rgb(221, 221, 221);
  }
&:first-child {
  border-top: 2px solid rgb(221, 221, 221);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
&:last-child {
  border-bottom: 2px solid rgb(221, 221, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
`