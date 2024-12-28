import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
  @media (max-width: 1024px) {
    body {
      font-size: 16px;
    }
  }
`

export default GlobalStyle
