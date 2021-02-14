import React from "react";
import { css } from "@emotion/css"

const mainNav = css({
  padding: "15px",
  fontFamily: "Roboto",
  background:"#495057",
  display: "flex"
})

const navList = css({
  display: "flex",
  flexGrow: "1"
})

const listItem = css({
  margin: "10px"
})

const navLinks = css({
  color: "white"
})

const BulmaNav = () => {
  return (
    <nav className={mainNav}>
      <ul className={navList}>
        <li className={listItem}><a className={navLinks} href="#">Home</a></li>
        <li className={listItem}><a className={navLinks} href="#">About Us</a></li>
        <li className={listItem}><a className={navLinks} href="#">The Mission</a></li>
      </ul>
      <div>
        <button className="button" style={{margin: "5px"}} >Sign Up</button>
      </div>
    </nav>
  );
};

export default BulmaNav;