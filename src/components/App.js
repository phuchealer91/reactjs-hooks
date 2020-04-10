import React, { useState, useEffect } from "react";
import "./ColorBox/colorBox.scss";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import PostList from "./PostList";
import Pagination from "./Pagination";
import queryString from "query-string";
import PostFiltersForm from "./PostFiltersForm";
import "../App.css";
import Clock from "./Clock";
function App() {
  const toDoList = [
    { id: 1, title: "La mot thang con trai", age: 8 },
    { id: 2, title: "Nguoi thu ba", age: 18 },
    { id: 3, title: "Song gio", age: 22 },
  ];

  // Clock
  const [showClock, setShowClock] = useState(true);
  const [todoList, setTodoList] = useState(toDoList);
  // PostList
  const [postList, setPostList] = useState([]);
  // Pagination
  const [pagination, setPagination] = useState({
    _page: "",
    _limit: "", //So item co trong 1 page
    _totalRows: "", //Tong so item
  });
  // filters
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
  //
  const paramsString = queryString.stringify(filters);
  useEffect(() => {
    async function fetchPost() {
      try {
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
    fetchPost();
  }, [filters]);

  useEffect(() => {
    if (localStorage && localStorage.getItem("todoList")) {
      //kiểm tra có tồn tại localStorage và localStorage có dữ liệu của key là TasksKey không
      var todoList = JSON.parse(localStorage.getItem("todoList")); //covert data từ string sang object
      setTodoList(todoList);
    }
  }, []);
  // Nhận newPage từ component Pagination (Con)
  function handlePageChangeP(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  function handleSubmit(newFilters) {
    console.log("handleSubmit", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      // Server ben backend quy dinh
      title_like: newFilters.term,
      // author_like: newFilters.term,
    });
  }
  function removeToDoItem(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  }

  function onRetriveValue(formValues) {
    const newToDo = {
      id: uuidv4(),
      title: formValues.txtTitle,
      age: formValues.txtAge,
    };
    const newToDoList = [...todoList];
    newToDoList.push(newToDo);
    setTodoList(newToDoList);
    localStorage.setItem("todoList", JSON.stringify(newToDoList));
  }
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <h3> Welcome React Hooks</h3>
      {/* <ColorBox /> */}
      {/* <TodoForm onSubmitForm={onRetriveValue} />
      <TodoList todos={todoList} onTodoClick={removeToDoItem} /> */}
      {showClock ? <Clock /> : ""}
      <div
        className="ui button primary"
        onClick={() => setShowClock(!showClock)}
      >
        Show/Hide Clock
      </div>

      {/* <PostFiltersForm handleSubmitForm={handleSubmit} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={(newPage) => handlePageChangeP(newPage)}
      /> */}
    </div>
  );
}

export default App;
