import { useState } from "react";
import SignupForm from "./components/SignupForm.js"
import "./App.css"

function App() {
    const storedTodos = JSON.parse(localStorage.getItem("@insper-react/todo"))

    const [todos, setTodos] = useState(storedTodos ? storedTodos : [])
    const [newTodoTitle, setNewTodoTitle] = useState("")

    function handleAddTodo(event){
        event.preventDefault()
        if (!newTodoTitle){
            return
        }

        const todo = {
            title: newTodoTitle,
            done: false
        }

        setTodos(state => {
            const newState = [...state, todo]
            localStorage.setItem("@insper-react/todo", JSON.stringify(newState))
            return newState
        })
        setNewTodoTitle("")
        
    }

    function handleRemoveTodo(todoToRemove){
        setTodos(state => {
            const newState = state.filter(todo => todo.title !== todoToRemove.title)
            
            localStorage.setItem("@insper-react/todo", JSON.stringify(newState))
            return newState
        })
    }

    

    return (     

      <div>
        <header>
            <h1>Minhas Tarefas</h1>
        </header>

      <main>
        <form id="createNewTodo" onSubmit={handleAddTodo}>
          <label for="newTodo">nova tarefa:</label>
          <input 
            type="text"
            id="newTodo"
            placeholder="Aprender React"
            value={newTodoTitle}
            onChange={event => setNewTodoTitle(event.target.value)}/>
          <button type="submit">adicionar tarefa</button>
          <button type="reset">cancelar</button>
        </form>

        <ul id="todoList">
            {todos.map((todo) => (
                <li key={todo.title}>
                    <span>{todo.title}</span>
                    <button>concluir tarefa</button>
                    <button onClick={() => handleRemoveTodo(todo)}>remover tarefa</button>
              </li>
            ))}

        </ul>
      </main>
    </div>
    );
  }
  
  export default App;
  