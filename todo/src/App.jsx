import { useState } from 'react'
import GlobalStyle from './assets/styles/Global'
import Todo from './components/todo/Todo'
import AddTask from './components/AddTask/AddTask'
import Search from './components/search/Search';

function App() {

  const [toogleAddTask, setToogleAddTask] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Asc");
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

  function handleRemove(removedTodo) {
    const newTodo = todo.filter((tasks) => {
      return removedTodo.id !== tasks.id;
    });

    setTodo(newTodo);
  }

  function handleComplete(task) {
    let newTodo = [...todo]
    newTodo = newTodo.map(todoComplete => {
      todoComplete.id === task.id ? todoComplete.isComplete =  !todoComplete.isComplete : todoComplete.isComplete;
      return todoComplete;
    })
    setTodo(newTodo);
  }
  return (
    <>
      <div className='Container'>
      <div className="header">
        <Search search={search} setSearch={setSearch} />
        <div className='buttons_container'>
        <button onClick={(e) => {setToogleAddTask(!toogleAddTask)}}>{(toogleAddTask) ? "Fechar" : "Criar tarefa"}</button>
        <div>
            <button className='order' onClick={() => setSort("Asc")}>ASC</button>
            <button onClick={() => setSort("Desc")}>DESC</button>
        </div>
        </div>
        {toogleAddTask &&
         <div>
          <AddTask handleAddTask={handleAddTask}/>
        </div>}
      </div>
        {todo.filter((todos) =>
          todos.text.toLowerCase().includes(search.toLowerCase())
        ).sort((a,b) =>
        sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
      ).map((todos) => (
          <Todo todo={todos} key={todos.id} handleComplete={handleComplete} handleRemove={handleRemove}/>
        ))}
      </div>
      <GlobalStyle />
    </>
  )
}

export default App
