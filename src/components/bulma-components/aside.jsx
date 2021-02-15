import React, { useState } from "react";
import { css } from "@emotion/css";
import axios from "axios";

const style = css({});

const Aside = () => {
  const [show, toggleShow] = useState(false);

  const handleShow = () => toggleShow(!show);

  function handleLogout() {
    return axios
      .post("/logout", {
        useCredentials: true,
      })
      .then((res) => {
        console.log("exploto");
      })
      .catch(() => console.log("exploto"));
  }
  return (
    <div
      className="dropdown is-active"
      style={{ position: "absolute", right: "100px", top: "20px" }}
    >
      <div onClick={handleShow} className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Actions</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div
          className="dropdown-content"
          style={{ display: show ? "inline-block" : "none" }}
        >
          <a href="/user-pet-list" className="dropdown-item">
            Your Publications
          </a>
          <a className="dropdown-item">Edit contact information</a>
          <a href="#" className="dropdown-item">
            Adoption Success
          </a>
          <a href="#" className="dropdown-item">
            Other dropdown item
          </a>
          <hr className="dropdown-divider" />
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
