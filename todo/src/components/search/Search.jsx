import { useState } from "react"

export default function Search({search, setSearch}) {

  return (
    <div>
        <input type="text" value={search} placeholder="Digite para pesquisar" onChange={(e) => {setSearch(e.target.value)}}/>
    </div>
  )
}