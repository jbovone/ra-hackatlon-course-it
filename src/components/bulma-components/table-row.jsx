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
      <td>
        <strong>{name}</strong>
      </td>
      <td>
        <strong>{description}</strong>
      </td>
      <td>
        <strong>{age}</strong>
      </td>
      <td>
        <strong>{type}</strong>
      </td>
      <td>
        <strong>{status}</strong>
      </td>
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
