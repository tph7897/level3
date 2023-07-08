import React from 'react'
import StButton from './Button'
import { styled } from 'styled-components';


function Buttons() {
  const alertMassage = () => {
    alert('버튼을 만들어 보세요.')
  }
  const promptMassage = ()=>{
    prompt('어렵나요?',"")
  }
  
  return (
    <div>
      <h1>Button</h1>
    <StButtonContainer>
        <StButton color={'primary'} size={'large'} name={'Large Primary Button'} onClick={alertMassage} icon={'🌠'}/>
        <StButton color={'primary'} size={'medium'} name={'medium'}/>
        <StButton color={'primary'} size={'small'} name={'small'}/>
    </StButtonContainer>
    <StButtonContainer>
        <StButton color={'negative'} size={'large'} name={'Large Nagative Button'} onClick={promptMassage} icon={'🌟'} />
        <StButton color={'negative'} size={'medium'} name={'medium'}/>
        <StButton color={'negative'} size={'small'} name={'small'}/>
    </StButtonContainer>
    </div>
  )
}

export default Buttons

const StButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  gap: 20px;
`;
