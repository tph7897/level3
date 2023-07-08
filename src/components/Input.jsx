import React, { useState } from 'react'
import StButton from './Button'
import { styled } from 'styled-components'

function Input() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('0');

    const onNameChangeHandler = (event) => {
        setName(event.target.value);
    };
    
    // 내용 필드가 변경된 경우
    const onPriceChangeHandler = (event) => {
        const removedNum = event.target.value.replace(/[^0-9]/g, ""); // 숫자만 들어오도록 함
        let TransPrice = (+removedNum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // 3글자마다 ,을 추가
            setPrice(TransPrice);
    };

    const ClickButtonHandler = (e) => {
        e.preventDefault();
        if (name.trim() === "" && price.trim() === "0") {
          return alert('이름과 가격 모두 입력해주세요.')
        } 
        alert(`{name : ${name}, price : ${price.replaceAll(",","")}}`)
      }

  return (
    <div>
        <h1>Input</h1>
        <StInputContainer onSubmit={ClickButtonHandler}>
            이름<StInput type='text' value={name} onChange={onNameChangeHandler}/>
            가격<StInput type='text' value={price} onChange={onPriceChangeHandler}/>
            <StButton color={'primary'} size={'small'} name={'저장'} onClick={ClickButtonHandler}/>
        </StInputContainer>
    </div>
  )
}

export default Input

const StInput = styled.input`
    border: 1px solid rgb(51, 51, 51);
    height: 40px;
    width: 200px;
    outline: none;
    border-radius: 8px;
    padding-left: 12px;
    padding-right: 12px;
`

const StInputContainer = styled.form`
    display: flex;
    flex-direction: row;
    gap: 30px;
`