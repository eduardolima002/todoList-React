import {TodoContainer} from './styled'


export default function Todo({todo}) {
  return (
    <TodoContainer>
        <div>
            <p>{todo.text}</p>
            <p>({todo.status})</p>
        </div>
        <div>
            <button className='button complete'>Complete</button>
            <button className='button exclude'>X</button>
        </div>
    </TodoContainer>
  )
}
