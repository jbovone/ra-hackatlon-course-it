import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import TableRow from "../components/bulma-components/table-row";
import axios from "axios";

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

export default function UserPetList() {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    if (pets === null) {
      axios
        .get("/pets")
        .then(({ data }) => {
          console.log("data");
          setPets(() => ({ ...data }));
        })
        .catch((er) => setPets("error"));
    }
  }, [pets, setPets]);

  return (
    <div className={contentContainer}>
      {pets === null ? (
        <div>loading</div>
      ) : pets === "error" ? (
        <div>error</div>
      ) : (
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
                  <abbr title="Type">Type</abbr>
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
      )}
    </div>
  );
}
