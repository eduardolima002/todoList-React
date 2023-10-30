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
    background-size: cover;
    background-attachment: fixed;
  }

  .Container {
    padding: 2rem;
    width: 600px;
    heigth: 90%;
    margin: 10% auto;
    background-color: #d5ded9;
    border-radius: 7px;
    overflow: auto;
  }

  .buttons_container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .buttons_container button {
    padding: 7px;
    background-color: #405059;
    color: #fff;
    border-radius: 3px;
  }

  .order {
    margin-right: 10px
  }
`