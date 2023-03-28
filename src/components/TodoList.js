import Todo from './todo-add';

function TodoList({ todos, setTodos, filterTD }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTD.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
