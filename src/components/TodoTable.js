import React from "react";
import TodoRowItem from "./TodoRowItem";
function TodoTable({ todos, deleteMember }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>

          <th scope="col">Crew</th>
          <th scope="col">Profession</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            todo={todo}
            deleteMember={deleteMember}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
