import {ITodo} from "../interfaces";


type TodosListProps = {
  todos:ITodo[],
  onRemove(id:number):void,
  onCheck(id:number):void
}

export const TodoList:React.FC<TodosListProps> = ({todos,onRemove,onCheck}) => {
  if(todos.length < 1) {
    return <div className={'message'}>You have no tasks to do. Please add it</div>
  }

  return (
    <ul className={'list'}>
      {
        todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={()=>onCheck(todo.id)}/>
                <span>{todo.title}</span>
              </label>
              <button onClick={()=>onRemove(todo.id)}>X</button>
            </li>
          )
        })
      }
    </ul>
  )
}