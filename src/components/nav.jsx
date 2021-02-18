import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Logo from "./svg/logo";
import { colors } from "../theme/colors";
import Aside from "./aside";

const BulmaNav = ({ formShow }) => {
  const [menu, showMenu] = useState(false);
  const mainNav = css({
    transition: "ease-in-out 0.1s",
    padding: "15px",
    fontFamily: "Roboto",
    background: "#495057",
    zIndex: 10000,
    display: "flex",
    top: 0,
    flexWrap: "wrap",
    width: "100vw",
    "@media(max-width: 570px)": {
      alignContent: "space-around",
      justifyItems: "stretch",
      ul: {
        order: 2,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      },
      div: {
        width: "100%",
        order: 1,
        "&>button": {
          position: "absolute",
          top: 15,
          right: 10,
        },
      },
    },
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

  const signUp = css({
    marginRight: "22px !important",
  });

  return (
    <nav className={mainNav} id="home">
      <Logo color={colors.logo} />
      <ul className={navList}>
        <li className={listItem}>
          <a className={navLinks} href="/">
            Home
          </a>
        </li>
        <li className={listItem}>
          <a className={navLinks} href="/#purpose">
            The Mission
          </a>
        </li>
        <li className={listItem}>
          <a className={navLinks} href="/#team">
            Meet the Team
          </a>
        </li>
        <li className={listItem}>
          <a className={navLinks} href="/adoptions">
            Adopt a pet
          </a>
        </li>
      </ul>
      <div>
        {menu && <Aside showMenu={showMenu} />}
        <button
          className={`button ${signUp}`}
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
