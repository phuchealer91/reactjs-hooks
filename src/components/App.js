import React, { useState, useEffect } from 'react';
import './ColorBox/colorBox.scss';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import '../App.css';
function App() {
  const toDoList = [
    { id: 1, title: 'La mot thang con trai', age: 8 },
    { id: 2, title: 'Nguoi thu ba', age: 18 },
    { id: 3, title: 'Song gio', age: 22 }
  ]
  const [todoList, setTodoList] = useState(toDoList);
  useEffect(() => {
    if (localStorage && localStorage.getItem('todoList')) { //kiểm tra có tồn tại localStorage và localStorage có dữ liệu của key là TasksKey không 
      var todoList = JSON.parse(localStorage.getItem('todoList')); //covert data từ string sang object
      setTodoList(todoList);
    }
  }, [])

  function removeToDoItem(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem('todoList', JSON.stringify(newTodoList));
  }

  function onRetriveValue(formValues) {
    const newToDo = {
      id: uuidv4(),
      title: formValues.txtTitle,
      age: formValues.txtAge
    }
    const newToDoList = [...todoList];
    newToDoList.push(newToDo);
    setTodoList(newToDoList);
    localStorage.setItem('todoList', JSON.stringify(newToDoList));
  }
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <h3> Welcome React Hooks</h3>
      {/* <ColorBox /> */}
      <TodoForm onSubmitForm={onRetriveValue} />
      <TodoList
        todos={todoList}
        onTodoClick={removeToDoItem}
      />
    </div>
  );
}

export default App;
