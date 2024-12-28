import React from 'react'
import styled from 'styled-components'

const SizeSelector = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
`

const SizeOption = styled.button`
  background-color: ${props => (props.selected ? '#0071e3' : 'white')};
  color: ${props => (props.selected ? 'white' : '#0071e3')};
  padding: 10px 20px;
  border: 1px solid #0071e3;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #005bb5;
    color: white;
  }
`

const SizeSelection = ({sizes, selectedSize, onSizeSelect}) => {
  return (
    <SizeSelector>
      {sizes.map(size => (
        <SizeOption
          key={size}
          selected={selectedSize === size}
          onClick={() => onSizeSelect(size)}
        >
          {size}mm
        </SizeOption>
      ))}
    </SizeSelector>
  )
}

export default SizeSelection
