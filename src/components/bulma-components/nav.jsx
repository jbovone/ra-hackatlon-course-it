import React from "react";
import { css } from "@emotion/css";
import Logo from "../svg/logo";
import { colors } from "../../theme/colors";

const mainNav = css({
  padding: "15px",
  fontFamily: "Roboto",
  background: "#495057",
  display: "flex",
});

const navList = css({
  display: "flex",
  flexGrow: "1",
});

const listItem = css({
  margin: "10px",
});

const navLinks = css({
  color: "white",
});

const BulmaNav = ({ formShow }) => {
  return (
    <nav className={mainNav}>
      <Logo color={colors.logo} />
      <ul className={navList}>
        <li className={listItem}>
          <a className={navLinks} href="/">
            Home
          </a>
        </li>
        <li className={listItem}>
          <a className={navLinks} href="/#about">
            About Us
          </a>
        </li>
        <li className={listItem}>
          <a className={navLinks} href="/purpose">
            The Mission
          </a>
        </li>
        <li className={listItem}>
          <a className={navLinks} href="/adoptions">
            Adopt a pet
          </a>
        </li>
      </ul>
      <div>
        <button
          className="button"
          style={{ margin: "5px" }}
          onClick={() =>
            formShow((state) => ({
              ...state,
              show: !state.show,
              route: "/signin",
            }))
          }
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default BulmaNav;
