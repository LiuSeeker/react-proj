function userGreetings(name){
    console.log("Hello", name)
}

const newTodoInput = document.getElementById("newTodo")
const createNewTodoForm = document.getElementById("createNewTodo")
const todoListUl = document.getElementById("todoList")


let todos= [
    {
        title: "aprender html",
        isDone: false
    },
    {
        title: "aprender css",
        isDone: false
    },
    {
        title: "aprender js",
        isDone: false
    }
]
const storedTodos = JSON.parse(localStorage.getItem("insper@todos/html"))

console.log(storedTodos)


todos = storedTodos ? storedTodos : todos

function renderLi(todo){
    const li = document.createElement("li")

    const span = document.createElement("span")
    const completeButton = document.createElement("button")
    const removeButton = document.createElement("button")

    span.textContent = todo.title
    completeButton.textContent = "concluir tarefa"
    removeButton.textContent = "remover tarefa"

    removeButton.onclick = () => handleDeleteTodo(todo)

    li.append(span)
    li.append(completeButton)
    li.append(removeButton)

    li.dataset.title = todo.title

    todoListUl.append(li)
}

function renderTodoList(todos){
    todos.map(function(todo){
        renderLi(todo)
    })
}


function handleCreateNewTodo(event){
    event.preventDefault()

    if (newTodoInput.value !== ""){

        let newTodo = {
            title: newTodoInput.value,
            isDone: false
        }
        renderLi(newTodo)

        todos.push(newTodo)

        localStorage.setItem("insper@todos/html", JSON.stringify(todos))
    }
    newTodoInput.value = ""
}


function handleDeleteTodo(todo){
    const todoIndex = todos.findIndex(function(todoToFind){
        if(todoToFind.title === todo.title){
          return todoToFind
        }
    })

    todos.splice(todoIndex, 1)

    todoListLi = todoListUl.querySelector(`[data-title="${todo.title}"]`)

    console.log(todoListLi)

    todoListUl.removeChild(todoListLi)

    localStorage.setItem("insper@todos/html", JSON.stringify(todos))
}


createNewTodoForm.onsubmit = handleCreateNewTodo

renderTodoList(todos)

// userGreetings("Liu")