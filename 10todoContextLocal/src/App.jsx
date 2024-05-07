import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import './App.css'
import {TodoProvider} from './contexts'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
  };

  //Isme humein vo item update karni hai jiski id match ho rhi hai, aur jo nahi match ho rhi hai unhe as it is return karna hai
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo )))
  };

  //Basically, humein purane array me vo ek new array unka banana hai jo humein chahiyea, like jo delete karna hai unhe nahi rakhna hai, unhe purane array me he pade rehne dena hai
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleComplete, updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4"> 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'>
                          <TodoItem todo={todo}/>
                        </div>
                      ))}
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
