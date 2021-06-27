import React, {useState} from "react";

interface TodoFormProps {
  onAdd(value:string):void,
}

export const TodoForm:React.FC<TodoFormProps> = ({onAdd}) => {
  const [value,setValue] = useState<string>('');

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const submitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    if(value.length > 2){
      onAdd(value)
      setValue('')
    } else {
      alert('The length of your task cannot be less than three letters')
    }
  }

  return (
    <form className={'todo-form'} onSubmit={submitHandler}>
      <input type="text" placeholder={'Enter task name . . . '} value={value} onChange={changeHandler}/>
      <button type="submit">Add</button>
    </form>
  )
}