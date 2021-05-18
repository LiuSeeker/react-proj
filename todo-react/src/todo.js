function Todo() {
  return (
    <div>
      <header>
      <h1>Minhas Tarefas</h1>
      </header>

      <main>
        <form id="createNewTodo">
          <label for="newTodo">nova tarefa:</label>
          <input type="text" id="newTodo" placeholder="Aprender React" />
          <button type="submit">adicionar tarefa</button>
          <button type="reset">cancelar</button>
        </form>

        <ul id="todoList">
          

        </ul>
      </main>
    </div>
  );
}

export default Todo;
