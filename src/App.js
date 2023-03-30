import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('All');
  const [filterTD, setFilterTD] = useState([]);
  let [todos, setTodos] = useState([]);

  // Functions
  const getLocalS = () => {
    // if (localStorage.getItem("todos") === null) {
    //   localStorage.setItem("todos", JSON.stringify(['hey']));
    // } else {
    //   const todoLocal = JSON.parse(localStorage.getItem("todos"));
    //   setTodos(todoLocal);
    // }
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  [todos, setTodos] = useState(getLocalS());

  useEffect(() => {
    getLocalS();
  }, []);

  // useEffect(() => {
  //   filterHandler();
  //   saveToLocalS();
  // }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTD(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTD(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTD(todos);
        break;
    }
  };

  useEffect(() => {
    // storing todos items
    filterHandler();
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  // Saving to local storage
  // const saveToLocalS = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  return (
    <div className="App">
      <header>
        <h1>My Todo list!</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setInputText={setInputText}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTD={filterTD} />
    </div>
  );
}

export default App;
