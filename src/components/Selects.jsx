import React from 'react'
import { styled } from 'styled-components'
import Select from './Select'

function Selects() {
  return (
    <div>
        <StSelectContainer>
        <h1>Select</h1>
        <StSelectSet>
          <Select position = {'absolute'} />
          <Select position= {'static'} />
        </StSelectSet>
        </StSelectContainer>
    </div>
  )
}

export default Selects

const StSelectContainer = styled.div`
    border: 3px solid rgb(221, 221, 221);
    overflow: hidden;
    margin-top: 50px;
    height: 200px;
    z-index : 2;
`

const StSelectSet = styled.div`
    display: flex;
    gap: 10px;
`