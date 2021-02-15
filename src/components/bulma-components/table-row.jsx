import React from "react";
import { css } from "@emotion/css";

const Delete = css({
  cursor: "pointer",
});

export default function TableRow({ name, description, age, type, status }) {
  const handleDelete = () => {
    console.log("Aca se llama a la API y lo borra");
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{age}</td>
      <td>{type}</td>
      <td>{status}</td>
      <td>
        <strong onClick={handleDelete} className={Delete}>
          {" "}
          Delete{" "}
          <i style={{ marginLeft: "10px" }} class="fas fa-times">
            {" "}
          </i>
        </strong>
      </td>
    </tr>
  );
}
