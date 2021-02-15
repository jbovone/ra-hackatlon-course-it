import React from "react";
import { css } from "@emotion/css";
import axios from "axios";

const style = css({});

const Aside = ({ showMenu }) => {
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
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          onClick={() => showMenu((menu) => !menu)}
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Dropdown button</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Your Publications
          </a>
          <a className="dropdown-item">Edit contact information</a>
          <a href="#" className="dropdown-item is-active">
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
