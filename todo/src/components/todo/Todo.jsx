import {TodoContainer} from './styled'


export default function Todo({todo, handleComplete, handleRemove}) {

  return (
    <TodoContainer>
        <div className={todo.isComplete ? "completed" : ""}>
            <p>{todo.text}</p>
            <p>({todo.status})</p>
        </div>
        <div>
            <button className='button complete' onClick={() => handleComplete(todo)}>Complete</button>
            <button className='button exclude' onClick={() => handleRemove(todo)}>X</button>
        </div>
    </TodoContainer>
  )
}
