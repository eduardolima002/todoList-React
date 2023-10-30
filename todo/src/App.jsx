import { useState } from 'react'
import GlobalStyle from './assets/styles/Global'
import Todo from './components/todo/Todo'
import AddTask from './components/AddTask/AddTask'
import Search from './components/search/Search';

function App() {

  const [toogleAddTask, setToogleAddTask] = useState(false);
  const [search, setSearch] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "adicionar x recurso ao projeto",
      status: "trabalho",
      isComplete: false
    },
    {
      id: 2,
      text: "Estudar flex-box",
      status: "escola",
      isComplete: false
    },
    {
      id: 3,
      text: "assistir TV",
      status: "lazer",
      isComplete: false
    }
  ])

  function handleAddTask(newTodo) {
    const newTodos = [...todo, newTodo]
    setTodo(newTodos);
  }


  return (
    <>
      <div className='Container'>
      <div className="header">
        <Search search={search} setSearch={setSearch} />
        <div className='buttons_container'>
        <button onClick={(e) => {setToogleAddTask(!toogleAddTask)}}>{(toogleAddTask) ? "Fechar" : "Criar tarefa"}</button>
        <div>
            <button>ASC</button>
            <button>DESC</button>
        </div>
        </div>
        {toogleAddTask &&
         <div>
          <AddTask handleAddTask={handleAddTask}/>
        </div>}
      </div>
        {todo.filter((todos) => 
          todos.text.toLowerCase().includes(search.toLowerCase())
        ).map((todos) => (
          <Todo todo={todos} key={todos.id}/>
        ))}
      </div>
      <GlobalStyle />
    </>
  )
}

export default App
