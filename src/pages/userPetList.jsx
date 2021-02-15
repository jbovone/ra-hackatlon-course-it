import React from "react";
import { css } from "@emotion/css";
import TableRow from "../components/bulma-components/table-row";

const tableContainer = css({
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  padding: "10px",
});

const contentContainer = css({
  minWidth: "100vw",
  minHeight: "100vh",
  maxWidth: "100%",
  background: "#767AF9",
  padding: "30px",
});

export default function UserPetList({ pets }) {
  return (
    <div className={contentContainer}>
      <div class={tableContainer}>
        <table
          class="table is-fullwidth"
          style={{ background: "#e5dbff", borderRadius: "10px" }}
        >
          <thead>
            <tr>
              <th>
                <abbr title="Name">Name</abbr>
              </th>
              <th>
                <abbr title="Description">Description</abbr>
              </th>
              <th>
                <abbr title="Age">Age</abbr>
              </th>
              <th>
                <abbr title="Type">Type</abbr>
              </th>
              <th>
                <abbr title="Status">Status</abbr>
              </th>
              <th>
                <abrr title="Action">Action</abrr>
              </th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => {
              return <TableRow {...pet} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
