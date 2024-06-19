import React from "react";
import { TodoRowItem } from "./TodoRowItem";
export const TodoTable: React.FC<{
  todos: TodoModel[];
  deleteMember: Function;
}> = (props) => {
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
        {props.todos.map((todo) => (
          <TodoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowAssigned={todo.rowAssigned}
            rowDescription={todo.rowDescription}
            deleteMember={props.deleteMember}
          />
        ))}
      </tbody>
    </table>
  );
};
