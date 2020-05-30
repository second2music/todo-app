import React from "react";

const List = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return (
        <li key={i}>
          {todo}
          <button onClick={() => props.handleRemove(i)}>削除</button>
        </li>
      );
    })}
  </ul>
);
export default List;
