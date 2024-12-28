import React from 'react'
import styled from 'styled-components'

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  padding: 20px;
`

const CaseCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display:flex;
  flex-direction:column;
  align-items:center;
  box-shadow:0px 3px 30px cyan;
  &:hover {
    transform: scale(1.05);
    box-shadow:0px 3px 20px red;
  }
`

const CaseSelection = ({cases, onCaseSelect}) => {
  return (
    <CaseGrid>
      {cases.map(caseItem => (
        <CaseCard key={caseItem.id} onClick={() => onCaseSelect(caseItem)}>
          <img src={caseItem.image} alt={caseItem.name} />
          <p>{caseItem.name}</p>
        </CaseCard>
      ))}
    </CaseGrid>
  )
}

export default CaseSelection
