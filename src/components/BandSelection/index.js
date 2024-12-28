import React from 'react'
import styled from 'styled-components'


const BandCarousel = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  padding: 20px;
  flex-wrap:wrap;
`

const BandCard = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  box-shadow:0px 3px 30px gray;

  &:hover {
    transform: scale(1.05);
    box-shadow:0px 3px 30px cyan;
  }
`

const Img =styled.img`
width:250px;`

const BandSelection = ({bands, onBandSelect}) => {

  return (
    <BandCarousel>
     {bands.map(band => (
        <BandCard key={band.id} onClick={() => onBandSelect(band)}>
          <Img src={band.image} alt={band.name} />
          <p>{band.name}</p>
        </BandCard>
      ))}
      
    </BandCarousel>
  )
}

export default BandSelection
