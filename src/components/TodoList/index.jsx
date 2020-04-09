import React from "react";
import PropTypes from "prop-types";
TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;
  function onHandleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  const elements = todos.map((todo, index) => {
    return (
      <ul key={todo.id} className="ui segment">
        <li onClick={() => onHandleClick(todo)}>
          <div>
            <p>Titile: {todo.title}</p>
            <p>Age: {todo.age}</p>
          </div>
        </li>
      </ul>
    );
  });
  return <div style={{ marginTop: "20px" }}>{elements}</div>;
}

export default TodoList;
