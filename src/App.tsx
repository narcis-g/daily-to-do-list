import { useState } from 'react'
import 'normalize.css'

import Layout from './components/Layout'
import TodoForm from './components/TodoForm'

type Todo={
  name: string;
  complete: boolean;
  createdAt: Date;
};

export default function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (name: string) => {
    const newTodo = {
      name: name,
      complete: false,
      createdAt: new Date ()
    }
    setTodos([...todos, newTodo]);
  }

  
  return (

    <Layout>Daily to do list
    <TodoForm onSubmit={createTodo}></TodoForm>
    </Layout>
  )
}