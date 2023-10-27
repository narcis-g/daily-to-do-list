import { useState } from 'react'
import 'normalize.css'

import Layout from './components/Layout'
import TodoForm from './components/TodoForm'

type Todo = {
  id: number;
  name: string;
  complete: boolean;
  createdAt: Date;
};

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (name: string) => {
    const newTodo = {
      id: Date.now(),
      name: name,
      complete: false,
      createdAt: new Date()
    }
    setTodos([...todos, newTodo]);
  }

  const completeTodo = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return;

    const newTodos = [...todos];
    const todo = newTodos[index];
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (

    <Layout>Daily to do list
      <TodoForm onSubmit={createTodo}></TodoForm>
    </Layout>
  )
}