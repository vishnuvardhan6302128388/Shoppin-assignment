import React from 'react'
import styled from 'styled-components'

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 24px;
  color: #333;
`

const PriceDisplay = ({price}) => {
  return (
    <PriceContainer>
      <p>Price: ${price}</p>
    </PriceContainer>
  )
}

export default PriceDisplay
