import React from "react";

export const TodoRowItem: React.FC<{
  rowNumber: number;
  rowDescription: string;
  rowAssigned: string;
  deleteMember: Function;
}> = (props) => {
  return (
    <tr onClick={() => props.deleteMember(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>

      <td>{props.rowAssigned}</td>
      <td>{props.rowDescription}</td>
    </tr>
  );
};
