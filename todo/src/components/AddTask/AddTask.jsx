import { useState } from "react"
import {AddTaskContainer} from './styled'

export default function AddTask({handleAddTask, setNewTodo}) {

    const [text, setText] = useState("");
    const [categoria, setCategoria] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      if((text !== "") || (categoria !== "")){
        const id = Math.floor(Math.random() * 1000)
        const newTodo = {
          id: id,
          text: text,
          status: categoria,
          isComplete: false
        }
        handleAddTask(newTodo);
        setText("");
        setCategoria("");
      }
    }

  return (
    <AddTaskContainer>
      <form onSubmit={handleSubmit}>
          <input value={text} placeholder="Insira o titulo" onChange={(e) => setText(e.target.value)}/>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Selecione um campo</option>
            <option value="escola">escola</option>
            <option value="lazer">lazer</option>
            <option value="trabalho">trabalho</option>
          </select>
        <button type="submit">Adicionar</button>
        </form>
    </AddTaskContainer>
  )
}