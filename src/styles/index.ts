import styled, { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: #576CBC;
  }
`

export default EstiloGlobal
