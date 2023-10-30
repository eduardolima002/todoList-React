import { createGlobalStyle } from "styled-components"
import night from '../imagens/night.jpg'

export default createGlobalStyle`
  * { 
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${night});
    background-size: contain;
  }

  .Container {
    padding: 2rem;
    width: 600px;
    heigth: 90%;
    margin: 15% auto;
    background-color: #d5ded9;
    border-radius: 7px;
    overflow: auto;
  }

  .buttons_container {
    display: flex;
    justify-content: space-between;
    
  }

`