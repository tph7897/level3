import React, { useState } from 'react'
import StButton from './Button'
import { styled } from 'styled-components';

function Modal() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  return (
    <div>
        <h1>Modal</h1>
        <StModalContainer>
            <StButton color={'primary'} size={'small'} name={'open modal'} onClick={()=>setFirstModal(pre => !pre)}/>
            <StButton color={'negative'} size={'large'} name={'open modal'} onClick={()=>setSecondModal(pre => !pre)}/>
        </StModalContainer>
        
        {firstModal && <div>
          <StModalOut />
          <StFirstModal>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
          <StButtonSet>
          <StButton color={'negative'} size={'small'} name={'닫기'} onClick={()=>setFirstModal(pre => !pre)}/>
          <StButton color={'primary'} size={'small'} name={'확인'}/>
          </StButtonSet>
          </StFirstModal>
          </div>
          }
        {secondModal && <div> 
          <StModalOut onClick={()=>setSecondModal(pre => !pre)}/>
          <StSecondModal>
          <p>닫기 버튼 1개가 있고,<br></br> 외부 영역을 누르면 모달이 닫혀요.</p>
          <StCloseButton onClick={()=>setSecondModal(pre => !pre)}>X</StCloseButton>
          </StSecondModal>
          
        </div>}
    </div>
  )
}
export default Modal

const StModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const StModalOut = styled.div`
    width: 100%;
    height: 100%;
    inset: 0px;
    position: fixed;
    background-color: rgba(221, 221, 221, 0.8);
    z-index : 4;
`

const StFirstModal = styled.div`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 500px;
    height: 300px;
    position: absolute;
    /* display: block; */
    z-index : 5;
`

const StButtonSet = styled.div`
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    gap: 5px;
`

const StSecondModal = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    width: 300px;
    height: 200px;
    position: absolute;
    /* display: block; */
    z-index : 5;
`

const StCloseButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
    border: 1px solid black;}
`