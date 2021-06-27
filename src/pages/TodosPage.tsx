import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodosList";
import React, {useEffect, useState} from "react";
import {ITodo} from "../interfaces";

export const TodosPage:React.FC = () => {

  const [todos,setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')  as ITodo[];
    setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addTodoFunc = (title:string) => {
    setTodos(prev => [{id:Date.now(), title:title , completed : false},...prev]);
  }

  const removeHandler = (id:number) => {
    const confirm = window.confirm('Аre you sure you want to delete this task ?');
    if(confirm) {
      setTodos(prev =>  prev.filter(todo=> todo.id !== id))
    }
  }

  const checkHandler = (id:number) => {
    setTodos(prev=> {
      return prev.map(todo => {
        if(todo.id === id) {
          return {...todo,completed:!todo.completed}
        }
        return todo
      })
    })
  }

  return (
    <div className={'container'}>
      <TodoForm onAdd={addTodoFunc}/>
      <TodoList todos={todos} onRemove={removeHandler} onCheck={checkHandler}/>
    </div>
  )
}