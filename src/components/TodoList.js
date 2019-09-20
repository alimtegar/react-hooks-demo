import React, { useContext, useEffect } from "react";

// Context
import TodoContext from "../contexts/TodoContext";

const Todos = () => {
  // Context
  const todoContext = useContext(TodoContext);

  // Effect
  useEffect(() => {
    todoContext.getTodos();
  }, [todoContext]);

  return (
    <div id="todo-list">
      {todoContext.todos
        ? todoContext.todos.map(todo => (
            <div
              className={`todo-item ${todo.completed ? "striked" : null}`}
              key={todo.title}
            >
              <h6>{todo.title}</h6>
            </div>
          ))
        : null}
    </div>
  );
};

export default Todos;
