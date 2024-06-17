import React from "react";

function TodoRowItem({ todo,deleteMember }) {
  return (
    <tr onClick={()=>deleteMember(todo.rowNumber)}>
      <th scope="row">{todo.rowNumber}</th>

      <td>{todo.rowAssigned}</td>
      <td>{todo.rowDescription}</td>
    </tr>
  );
}

export default TodoRowItem;
