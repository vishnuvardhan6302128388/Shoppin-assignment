import React from 'react'
import styled from 'styled-components'

const PreviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const WatchImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  border-radius: 15px;
`

const WatchPreview = ({watchConfig}) => {
  return (
    <PreviewContainer>
      <WatchImage src={watchConfig.image} alt="Watch Preview" />
    </PreviewContainer>
  )
}

export default WatchPreview
