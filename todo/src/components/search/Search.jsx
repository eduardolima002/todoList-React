import { useState } from "react"
import {SearchContainer} from './Styled'

export default function Search({search, setSearch}) {

  return (
    <SearchContainer>
      <h2>Pesquisar:</h2>
        <input type="text" value={search} placeholder="Digite para pesquisar" onChange={(e) => {setSearch(e.target.value)}}/>
    </SearchContainer>
  )
}